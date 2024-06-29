The Keeper App is a simple yet effective note-taking application built using React. It allows users to add, view, and delete notes dynamically. The main components include the App component for managing state and rendering the application structure, Note component for displaying individual notes with delete functionality, and NewNote component for adding new notes through controlled input fields. The project utilizes React's state management and component lifecycle methods to provide a responsive and interactive user experience for organizing and managing notes.

### App Component (App.js)

The `App` component serves as the main container for your note-taking application. It manages the state of `userNotes`, which holds an array of note objects.

1. **State Management**: 
   ```javascript
   const [userNotes, setUserNotes] = useState([]);
   ```
   - `userNotes` is initialized as an empty array using the `useState` hook. It stores all the notes created by the user.

2. **Deleting a Note**:
   ```javascript
   function delNote(id) {
       setUserNotes((prevNotes) => {
           return prevNotes.filter((item, index) => index !== id);
       });
   }
   ```
   - `delNote` function deletes a note based on its `id`. It uses the `setUserNotes` function provided by the `useState` hook to update the state. It filters out the note with the specified `id` from `userNotes`.

3. **Creating Notes**:
   ```javascript
   function createNote(item, index) {
       return (
           <Note
               key={index}
               id={index}
               noteTitle={item.title}
               noteContent={item.content}
               del={delNote}
           />
       );
   }
   ```
   - `createNote` function maps over the `userNotes` array and generates a `Note` component for each note object. It passes necessary props like `key`, `id`, `noteTitle`, `noteContent`, and `del` (delete function) to each `Note` component.

4. **Adding a New Note**:
   ```javascript
   function addNote(note) {
       setUserNotes((prevNotes) => [...prevNotes, note]);
   }
   ```
   - `addNote` function adds a new note to the `userNotes` array. It utilizes the spread operator (`...`) to create a new array with the existing `prevNotes` and appends the new `note` object at the end.

5. **Rendering**:
   ```javascript
   return (
       <div>
           <Header />
           <NewNote add={addNote} />
           <div className="content">
               {userNotes.map(createNote)}
           </div>
           <Footer />
       </div>
   );
   ```
   - The `App` component returns JSX that includes the `Header`, `NewNote`, `Note` components, and `Footer`. It passes down the `addNote` function to `NewNote` for adding new notes and iterates over `userNotes` to render `Note` components using the `createNote` function.

### Note Component (Note.js)

The `Note` component is responsible for displaying an individual note.

1. **Delete Function**:
   ```javascript
   function deleteNote() {
       props.del(props.id);
   }
   ```
   - `deleteNote` function invokes the `del` prop function passed from the parent (`App`) when the delete button is clicked. It passes the `id` of the note to be deleted.

2. **Rendering**:
   ```javascript
   return (
       <div className="note">
           <h3 className="noteTitle">{props.noteTitle}</h3>
           <p className="noteContent">{props.noteContent}</p>
           <button onClick={deleteNote} className="deleteBtn">Delete</button>
       </div>
   );
   ```
   - The `Note` component renders the note's title (`noteTitle`), content (`noteContent`), and a delete button (`Delete`). When the delete button is clicked, it triggers the `deleteNote` function.

### NewNote Component (NewNote.js)

The `NewNote` component is responsible for adding new notes.

1. **State Management**:
   ```javascript
   const [note, setNote] = useState({
       title: "",
       content: ""
   });
   ```
   - `NewNote` component initializes the `note` state using `useState` hook to manage the title and content of the new note being created.

2. **Event Handlers**:
   ```javascript
   function handleTitleChange(event) {
       setNote(prevNote => ({
           ...prevNote,
           title: event.target.value
       }));
   }

   function handleTextChange(event) {
       setNote(prevNote => ({
           ...prevNote,
           content: event.target.value
       }));
   }
   ```
   - `handleTitleChange` and `handleTextChange` functions update the `title` and `content` fields of the `note` state respectively whenever there is a change in the input fields.

3. **Adding a New Note**:
   ```javascript
   function addNewNote() {
       props.add(note);
       setNote({
           title: "",
           content: ""
       });
   }
   ```
   - `addNewNote` function calls the `add` prop function passed from the parent (`App`) to add the current `note` to the list of `userNotes`. It then resets the `note` state to clear the input fields after adding the note.

4. **Form Submission Handling**:
   ```javascript
   function formSub(event) {
       event.preventDefault();
   }
   ```
   - `formSub` function prevents the default form submission behavior when the add button is clicked.

5. **Rendering**:
   ```javascript
   return (
       <form className="inpNewNote" onSubmit={formSub}>
           <input
               onChange={handleTitleChange}
               name="title"
               className="titleInp"
               placeholder="Title"
               value={note.title}
           />
           <input
               onChange={handleTextChange}
               name="text"
               className="textInp"
               placeholder="Take a note..."
               value={note.content}
           />
           <button onClick={addNewNote} className="addBtn" type="submit">Add</button>
       </form>
   );
   ```
   - The `NewNote` component renders a form with input fields for `title` and `content` of the new note. It handles input changes using `onChange` events, adds a new note using `addNewNote` function when the add button is clicked, and prevents default form submission.

### HTML Structure (index.html)

The `index.html` file serves as the entry point for your React application.

- It includes basic HTML structure with meta tags and a title.
- Links to Google Fonts and a CSS file (`style.css`) for styling.
- It has a `<div id="root"></div>` where the React application is mounted.
- It includes a script tag `<script src="../src/index.js" type="text/jsx"></script>` to include the bundled JavaScript file (`index.js`) generated by React.

### Summary

- **App Component**: Manages state for notes, handles note creation, deletion, and renders UI components (`Header`, `NewNote`, `Note`, `Footer`).
- **Note Component**: Displays individual notes and handles note deletion.
- **NewNote Component**: Manages state for new note inputs, handles input changes, and adds new notes.
- **HTML Structure**: Provides basic structure, links to dependencies, and mounts the React application.

This breakdown illustrates how your React components interact to create a basic note-taking application, utilizing state management, event handling, and component composition.
