const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
const Listing = require("../models/listing.js");
const Reviews = require("../models/review.js");
const ExpressError = require('../utils/ExpressError.js');

module.exports.index = async (req, res)=>{
    const alllistings = await Listing.find({});
    res.render('./listings/home.ejs', {alllistings});
}

module.exports.details = async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!listing){
        req.flash("error","This listing does not exist");
        res.redirect("/listing");
    }
    res.render('./listings/details.ejs', {listing})
}


module.exports.newListingForm = (req, res)=>{
    res.render('./listings/new.ejs');
}

module.exports.newListing = async (req, res, next)=>{
    const newList = new Listing(req.body.listing);
    newList.image.url= req.file.path;
    newList.image.filename = req.file.filename;
    newList.owner = req.user._id;
    await newList.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listing");
}

module.exports.editListing = async (req, res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", {listing});
}

// module.exports.saveListing = async (req, res)=>{
//     let {id} = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     req.flash("success", "Listing Updated Successfully!");
//     res.redirect("/listing");
// }


module.exports.saveListing = async (req, res) => {
    let { id } = req.params;
    const updatedListingData = req.body.listing;
    const uploadedFile = req.file; // Check if a new file was uploaded

    try {
        const existingListing = await Listing.findById(id);

        if (!existingListing) {
            req.flash("error", "Listing not found!");
            return res.redirect("/listing"); // Or handle this error appropriately
        }

        if (uploadedFile) {
            // 1. Upload the new image to Cloudinary
            const newImageUrl = uploadedFile.path; // Assuming your middleware provides the Cloudinary URL
            const newImageFilename = uploadedFile.filename; // Assuming your middleware provides the Cloudinary public ID or filename
            console.log("upload file exists");
            // 2. Delete the old image from Cloudinary (if it exists)
            if (existingListing.image.url && existingListing.image.filename) {
                await cloudinary.uploader.destroy(existingListing.image.filename);
            }

            // 3. Update the listing data with the new image URL and filename
            updatedListingData.image = { url: newImageUrl, filename: newImageFilename };
        }

        // 4. Update the listing in the database
        await Listing.findByIdAndUpdate(id, { ...updatedListingData });
        req.flash("success", "Listing Updated Successfully!");
        res.redirect(`/listing`);

    } catch (error) {
        console.error("Error updating listing:", error);
        req.flash("error", "Failed to update listing.");
        res.redirect(`/listing/edit/${id}`); // Or handle the error redirect as needed
    }
};




// module.exports.destroyListing = async (req, res)=>{
//     let {id} = req.params;
//     const existingListing = await Listing.findById(id);
//     if (existingListing.image.url && existingListing.image.filename) {
//         await cloudinary.uploader.destroy(existingListing.image.filename);
//         await Listing.findByIdAndDelete(id);
//     }
//     req.flash("success", "Listing Deleted!");
//     res.redirect("/listing");
// }


module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;

    try {
        const listingToDelete = await Listing.findById(id);
        
        if(listingToDelete.reviews){
            let reviews = listingToDelete.reviews;
            for(let review of reviews){
                let deletedReview = await Reviews.findByIdAndDelete(review);
                console.log(deletedReview);
            }
        }

        if (!listingToDelete || !listingToDelete.image || !listingToDelete.image.filename) {
            // If the listing or its image info doesn't exist, just delete from the DB
            await Listing.findByIdAndDelete(id);
            req.flash("success", "Listing Deleted!");
            return res.redirect("/listing");
        }

        // Delete the image from Cloudinary using the filename
        const result = await cloudinary.uploader.destroy(listingToDelete.image.filename);
        console.log("Cloudinary Delete Result:", result);

        // Check if the Cloudinary deletion was successful (you might want to examine the 'result')
        if (result.result === 'ok' || result.result === 'not found') {
            // Only delete the listing from the database if the Cloudinary deletion was ok or the image wasn't found
            await Listing.findByIdAndDelete(id);
            req.flash("success", "Listing Deleted!");
        } else {
            req.flash("error", "Error deleting image from Cloudinary. Listing deleted from database.");
            await Listing.findByIdAndDelete(id); // Still delete the listing even if Cloudinary fails
        }
    } catch (error) {
        console.error("Error deleting listing and image:", error);
        req.flash("error", "Error deleting listing.");
    }
    res.redirect("/listing");
};