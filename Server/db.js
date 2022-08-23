const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/codeio?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to Mongo successfully");
    })
};

module.exports = connectToMongo;