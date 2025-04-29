const express = require('express');
const app = express();
const ExpressError = require('./utils/ExpressError.js');
const listingRoutes = require('./routes/listing.js');
const reviewRoutes = require('./routes/review.js');
const userRoutes = require("./routes/user.js");
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const dbUrl = "mongodb://127.0.0.1:27017/airbnb";

//MongoDB Setup
const mongoose = require('mongoose');

main().then(()=>{
    console.log("DB Connection Successful");
}).catch(err=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(dbUrl);
}


//Method override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


//Using views folder
const path = require('path');
app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));


app.use(session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
}));

app.use(flash());


//Passport 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})



app.use("/listing", listingRoutes);
app.use("/listing/:id/review", reviewRoutes);
app.use("/", userRoutes);

//If any route doesn't match
app.all("*", (req, res, next)=>{
    next(new ExpressError(404, "Page Not found"));
})

//Middleware
app.use((err, req, res, next)=>{
    let {statusCode=500, message="Something went wrong!"} = err;
    res.status(statusCode).render('error.ejs', {message});
})


app.listen(8080, (req, res)=>{
    console.log("App is working well");
})