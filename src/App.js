import React, { useEffect, useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import "./App.css";
const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (note) => {
    setNotes([note, ...notes]);
  };
  
  // console.log("addNode",addNote);
  
  // Load notes from local storage on initial render if it is in local storage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Save notes to local storage whenever notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
 

  // delete function--
  const handleDelete = (id) => {
    // console.log("notes",notes)
    // console.log(id)
    const updatedNotes = notes.filter((newNotes)=> newNotes.index!==id);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <div className='container'>
  <div className='notes-app'>
      <h2>Notes App</h2> 
      <NoteForm submitNotes={addNote} />
      </div>
      <div className="notes-collection">
      <h2>Notes Summary</h2> 
      <NoteList notes={notes}  onDelete={handleDelete}/>
      </div>
      </div>
    </div>
    
  );
};

export default App;
