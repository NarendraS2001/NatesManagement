import React, { Fragment } from "react";
import Note from "./Note";
import classes from './NoteList.module.css'
const NoteList = (props) => {
  // console.log(props.notes)
  
  // console.log(onDelete)
  return (
    <div className={classes.list}>
      {props.notes.map((note) => (
        <Fragment key={note.index}>
          <Note id={note.index} title={note.title} description={note.description} date={note.date} onDelete={props.onDelete} />
        </Fragment>
      ))}
    </div>
  );
};
export default NoteList;
