const mongoose = require("mongoose");
require("dotenv").config();

function connectToDB(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("connected to DB");
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = connectToDB;