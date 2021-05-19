import React, { useState } from "react";
import styled from "./Todo.module.css"
const TodoInp = ({ onClick }) => {
  const [query, setquery] = useState("");
  return (
    <div>
      <input
        className={styled.inp}
        placeholder="write something"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      <button className={styled.btn} onClick={() => onClick(query)}>ADD</button>
    </div>
  );
};

export default TodoInp;