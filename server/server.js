const express = require("express")
const app = express()
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const { getNoteRoute } = require("./routes/index")
const { createNoteRoute } = require("./routes/index")

const PORT = process.env.PORT || 3001

// Static route to serve up the content of our built webpack bundle which is located in the dist folder
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//connect to mongoose
mongoose.connect(
    "mongodb+srv://lewisemarcus:root@cluster0.ejsvy.mongodb.net/notesDB",
)

//require routes
app.use("/", createNoteRoute)
app.use("/", getNoteRoute)

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`))
