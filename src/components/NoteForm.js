import { useState } from "react";
import classes from "./NoteForm.module.css";
const NoteForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);
  const [titleError, setTitleError] = useState(false);


  const titleHandler = (event) => {
    setTitle(event.target.value);
    if(event.target.value.trim().length>0)
    setTitleError(false);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
    if(event.target.value.trim().length>0)
    setDescriptionError(false);
  };

  const submitHandler = (event) => {
    // to stop the browser default behavior--
    event.preventDefault();

    if (title.trim().length == 0 || description.trim().length == 0) {
      console.log(title.length);
      if (title.trim().length==0) setTitleError(true);
      else setTitleError(false);
      if (description.trim().length==0) setDescriptionError(true);
      else setDescriptionError(false);

      return;
    }
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    
    props.submitNotes({
      index: Math.random().toString(),
      title: title,
      description: description,
      date:date,

    });
    setTitle("");
    setDescription("");
    setDescriptionError(false)
    setTitleError(false)
  };
 

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={`${classes.input} ${titleError && classes.errorInput}`}
          type="text"
          placeholder="Title"
          value={title}
          onChange={titleHandler}
        />
        {titleError && <div className={classes.errorT}>title required*</div>}
        <textarea
          className={`${classes.input} ${
            descriptionError && classes.errorInput
          }`}
          placeholder="Description"
          value={description}
          onChange={descriptionHandler}
        />
        {descriptionError && <div className={classes.errorD}>description required*</div>}
        <button type="submit">
          Add Note
        </button>
      </form>
    </>
  );
};
export default NoteForm;
