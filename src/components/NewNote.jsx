import React, { useState } from "react";

function NewNote(props) {
    // states
    const [note, changeNote] = useState({
        title: "",
        content: ""
    });

    function handleTitleChange(event) {
        console.log(`Enter title of note: ${event.target.value}`);

        changeNote((prevNotes) => {
            return {
                ...prevNotes,
                title: event.target.value,
                content: prevNotes.content
            }
        })
    }
    function handleTextChange(event) {
        console.log(`Enter text of note: ${event.target.value}`);

        changeNote((prevNotes) => {
            return {
                ...prevNotes,
                title: prevNotes.title,
                content: event.target.value
            }
        })
    }


    function addNewNote() {
        console.log("Add new note button clicked.");
        props.add(note);
        
        changeNote((prevNotes) => {
            return {
                title: "",
                content:""
            }
        })

    }

    function formSub(event) {
        event.preventDefault();
    }

    return (
        <form className="inpNewNote" onSubmit={formSub}>
            <input onChange={handleTitleChange} name="title" className="titleInp" placeholder="Title" value={note.title}></input>
            <input onChange={handleTextChange} name="text" className="textInp" placeholder="Take a note..." value={note.content}></input>
            <button onClick={addNewNote} className="addBtn" type="submit">Add</button>
        </form>
    );
};


export default NewNote;