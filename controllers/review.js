const Listing = require("../models/listing.js");
const Review = require('../models/review.js');
const ExpressError = require('../utils/ExpressError.js');


module.exports.submitReview = async (req, res)=>{
    const currListing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    currListing.reviews.push(newReview);
    await newReview.save();
    await currListing.save();
    req.flash("success", "Review Submitted Successfully");
    res.redirect(`/listing/detail/${currListing.id}`);
}

module.exports.destroyReview = async (req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");
    res.redirect(`/listing/detail/${id}`);
}