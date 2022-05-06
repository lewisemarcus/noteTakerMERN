import React, { useEffect, useState } from "react"

function Notes() {
    const [notes, setNotes] = useState([
        {
            title: "",
            content: "",
        },
    ])

    useEffect(() => {
        async function fetchNotes() {
            const getNotesData = await fetch("/notes")

            const allNotes = await getNotesData.json()

            setNotes(allNotes)
        }

        fetchNotes()
    })

    return (
        <div className="container">
            <h1>Notes page</h1>

            {notes.map((note, index) => {
                return (
                    <div key={index}>
                        <h1>{note.title}</h1>
                        <p>{note.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Notes
