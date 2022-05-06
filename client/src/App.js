import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { CreateNote, Notes, Home } from "./components/navigation/index"
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/notes" element={<Notes />}></Route>
                <Route path="/create" element={<CreateNote />}></Route>
            </Routes>
        </Router>
    )
}

export default App
