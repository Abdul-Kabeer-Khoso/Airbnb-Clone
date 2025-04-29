require('dotenv').config();
const express = require('express');
const router = express.Router();
const Listing = require('../models/listing.js');
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const {listingSchema, reviewSchema} = require('../schemaValidation.js');
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const {storage} = require('../cloudConfig.js');
const upload = multer({storage});


//show listing
router.get("/", wrapAsync(listingController.index));

//Details
router.get("/detail/:id", isLoggedIn, wrapAsync(listingController.details));

//Add new
router.get("/new", isLoggedIn, listingController.newListingForm)


//Post new list
router.post("/", isLoggedIn, upload.single('listing[image]'), validateListing,  wrapAsync(listingController.newListing));


//Edit
router.get("/edit/:id", isLoggedIn, isOwner,  wrapAsync(listingController.editListing));

//Save after edit
router.put("/:id", upload.single("listing[image]"), validateListing, wrapAsync(listingController.saveListing));

//Delete
router.delete("/:id", isOwner, wrapAsync(listingController.destroyListing));

module.exports = router;