import React from "react";
import "./AddTask.css";
import IInput from "../Input/Input";

const CardTask = ({ addCard, setTitle, title }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTitle(value);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3 px-1">
      <IInput
        type="text"
        onChange={handleChange}
        name="title"
        value={title}
        className="form-control"
      />
      <button className="btn btn-add ms-2 " onClick={addCard}>
        add
      </button>
    </div>
  );
};

export default CardTask;
