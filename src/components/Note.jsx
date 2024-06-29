import React from "react";

function Note(props) {

    function deleteNote(){
        console.log(`Note id: ${props.id} got clicked for delete in note!`);
        props.del(props.id);
    }

    // props--> createNote: noteTitle   noteContent
    return (
        <div className="note">
            <h3 className="noteTitle">{props.noteTitle}</h3>
            <p className="noteContent">{props.noteContent}</p>
            <button onClick={deleteNote} className="deleteBtn" type="submit">Delete</button>
        </div>
    );
};

export default Note;