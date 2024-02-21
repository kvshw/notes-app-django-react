import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../assets/arrow-left.svg";

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
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <img src={ArrowLeft} alt="" className="header-svg" />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
