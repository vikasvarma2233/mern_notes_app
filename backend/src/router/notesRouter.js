const express = require("express");
const {createNotesController ,getAllNotesController,getSingleNoteController,
    updatedNotescontroller,deleteNoteController
} = require("../controller/noteController");


const router = express.Router();

router.post("/create",createNotesController);

router.get("/allNotes",getAllNotesController);

router.get("/:id",getSingleNoteController);
router.put("/:id",updatedNotescontroller);
router.delete("/:id",deleteNoteController);


module.exports =    router;