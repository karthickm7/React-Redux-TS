import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { NewNote } from "./NewNote";
import { addNote } from "./Reducers/actions";
import { Notestate } from "./Reducers/notesReducer";

function App() {
  const notes = useSelector<Notestate, Notestate["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note:string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNote addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
