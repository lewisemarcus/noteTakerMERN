import React, { useState } from "react"
import axios from "axios"

function CreateNote() {
    const [input, setInput] = useState({ title: "", content: "" })

    function handleChange(event) {
        const { name, value } = event.target

        //prevInput starts as original input, so { title: "", content: "" }
        setInput((prevInput) => {
            //return an object to match 'input' = { title: "", content: "" }
            return {
                //pass prevInput in order to return all elements of the object as separate, otherwise one overwrites the other
                //Spread operator applies all properties of prevInput {name, value}(name is either content or title) to the returned object.
                //[name] refers to the 'title' key or 'content' key and updates the entire prevInput with the new value
                ...prevInput,
                [name]: value,
            }
        })
    }

    function handleClick(event) {
        event.preventDefault()

        const newNote = {
            title: input.title,
            content: input.content,
        }

        axios.post("http://localhost:3001/create", newNote)
    }

    return (
        <div className="container">
            <h1>Create Note page</h1>
            <form>
                <div className="form-group">
                    <input
                        onChange={handleChange}
                        name="title"
                        value={input.title}
                        autoComplete="off"
                        className="form-control"
                        placeholder="note title..."
                    ></input>
                </div>
                <div className="form-group">
                    <textarea
                        onChange={handleChange}
                        name="content"
                        value={input.content}
                        autoComplete="off"
                        className="form-control"
                        placeholder="write your note..."
                    ></textarea>
                </div>

                <button
                    onClick={handleClick}
                    className="btn btn-large btn-info"
                >
                    ADD NOTE
                </button>
            </form>
        </div>
    )
}

export default CreateNote
