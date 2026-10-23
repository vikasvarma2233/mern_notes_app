
const { notify } = require("../app");
const notesModel  = require("../module/noteMode")


//Create 
const createNotesController = async (req, res) => {
    try {
        const { title, description } = req.body;

        const newNotes = await notesModel.create({
            title,
            description,
        });

        return res.status(201).json({
            message: "Notes created successfully",
            data: newNotes,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error",
        });
    }
}

//Read-all
const getAllNotesController = async (req,res)=>{
    
    try {
    
        const allNotes = await notesModel.find();

        res.status(200).json({
            message:"all notes fetched",
            data:allNotes,
        });

        
    } catch (error) {

        return res.status(500).json({
            message:"internal server error"
        })
        
    }
}


//Read-one
const getSingleNoteController = async (req,res)=>{

try {

    let noteId = req.params.id;

let oneNote = await notesModel.findById(noteId);

res.status(200).json({
    message:"note fetch succesfully",
    data:oneNote,
})
    
} catch (error) {

    return res.status(500).json({
        message:"internal server error",

    });
    
}

}


// update

const updatedNotescontroller =async (req,res)=>{

    try {

        let Id = req.params.id;
        let body = req.body;


        let upData = await notesModel.findByIdAndUpdate(Id, body ,{
            new:true,

        })


        res.status(200).json({
            message:"Note updated successfully",
            data:upData,
        })
        
    } catch (error) {
        
        return res.status(500).json({
            message:"Internal server error",
        })
    }

}

//Delete
const deleteNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;

    await notesModel.findByIdAndDelete(noteId);

    return res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};




module.exports = {createNotesController,getAllNotesController,getSingleNoteController,updatedNotescontroller,deleteNoteController};