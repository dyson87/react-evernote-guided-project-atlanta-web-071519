import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  // console.log(props)
  return (
    <Fragment>

      <h2>{props.selectedNote.title}</h2>
      <p>{props.selectedNote.body}</p>
      <button onClick={() => {props.handleButton(props.selectedNote)}}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
