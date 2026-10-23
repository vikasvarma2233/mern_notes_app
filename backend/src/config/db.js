const mongoose = require("mongoose");


const connectDB  = ()=>{

    try {

      mongoose.connect("mongodb://localhost:27017/notes-db");
      console.log("database is connected...");
        
    } catch (error) {
         console.log("error in database",error)
    }
}

module.exports = connectDB;