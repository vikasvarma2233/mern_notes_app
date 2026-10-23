const mongoose = require("mongoose");


const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        minlength:[20,"description is required"],
    }
})



const NotesModel = mongoose.model("notes",noteSchema);

module.exports = NotesModel;