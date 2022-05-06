const express = require("express")

const router = express.Router()

const Note = require("../../models/noteModel")

router.route("/notes").get(async (req, res) => {
    const foundNotes = await Note.find()

    res.json(foundNotes)
})
module.exports = router
