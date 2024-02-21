import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const NotePage = () => {
  const { id } = useParams();

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };

  return (
    <div>
      <p>{note?.body}</p>
    </div>
  );
};

export default NotePage;
