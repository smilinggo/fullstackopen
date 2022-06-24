import React from "react";
import ReactDOM from "react-dom/client";

const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

export default Note;
