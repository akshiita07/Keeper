import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NewNote from "./NewNote";


function App() {

    // state for array
    const [userNotes, changeNote] = useState([]);

    function delNote(id) {
        console.log(`Note id: ${id} got clicked for delete in APP!`);
        changeNote((prevNotes) => {
            return prevNotes.filter(function (item, index) {
                return index !== id;
            })
        })
    };

    function createNote(item, index) {
        return (
            <Note
                key={index}     //it must have a key
                id={index}
                noteTitle={item.title}
                noteContent={item.content}
                del={delNote}
            />
        )
    };


    function addNote(note) {
        console.log(`App has recieved note :`);
        console.log(note);

        changeNote((prevNotes) => {
            return [
                ...prevNotes,
                note
            ]
        })
    }

    return (
        <div>
            <Header />
            <NewNote add={addNote}/>
            <div className="content">
                {userNotes.map(createNote)}
            </div>
            <Footer />
        </div>
    );
};


export default App;