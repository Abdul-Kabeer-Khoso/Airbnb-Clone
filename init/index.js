const mongoose = require('mongoose');
const init = require('./init.js');
const Listing = require('../models/listing.js');

main().then(()=>{
    console.log("Connection Successful for Data initialization");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
}


const initDB = async () =>{
    await Listing.deleteMany({});
    init.data = init.data.map((obj)=>({...obj, owner: "67fff4385550e9e13f0cf7b5"}));
    await Listing.insertMany(init.data);
    console.log("Data was initialized successfully");
}

initDB();

