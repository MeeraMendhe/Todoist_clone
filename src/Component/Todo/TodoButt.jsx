import React from "react";
import styled from "./Todo.module.css"
const TodoButt = ({ id, handledelete, handletoggle, status }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={status}
        onClick={() => handletoggle(id)}
      />
      <button 
        onClick={() => {
          handledelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoButt;