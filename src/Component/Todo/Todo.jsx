import React, { useState } from "react";
import TodoInp from "./TodoInp";
import { v4 as uuid } from "uuid";
import TodoButt from "./TodoButt";

const Todo = () => {
  const [text, setText] = useState([]);

  const [isloading, setloading] = useState(true);

  const [iserror, seterror] = useState(false);

  const [show, setshow] = useState(false);

  const handleadd = (query) => {
    const playload = {
      id: uuid(),
      titile: query,
      status: false
    };
    setText([...text, playload]);
  };

  const handletoggle = (id) => {
    const tog = text.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );

    setText(tog);
  };

  const handledelete = (id) => {
    const del = text.filter((item) => item.id !== id);

    setText(del);
  };
  return isloading ? (
    <div>
      ....loading here wait{" "}
      <button onClick={setloading((prev) => !prev)}>CLICK HERE</button>
    </div>
  ) : iserror ? (
    <div>something is wrong</div>
  ) : (
    <div>
      <div>
        <TodoInp onClick={handleadd} />
      </div>

      <div>
        {text
          .filter((item) => !item.status)
          .map((item) => (
            <div>
              {`${item.titile} - ${item.status}`}
              <TodoButt
                handletoggle={handletoggle}
                handledelete={handledelete}
                key={item.id}
                {...item}
              />
            </div>
          ))}

        <div>
          <button onClick={() => setshow(!show)}>
            {show ? "hide" : "show"} completed
          </button>
        </div>

        {show &&
          text

            .filter((item) => item.status)
            .map((item) => (
              <div
                style={
                  `$item.status}` ? { textDecoration: "line-through" } : null
                }
              >
                {`${item.titile} - ${item.status}`}
                <TodoButt
                  handletoggle={handletoggle}
                  handledelete={handledelete}
                  key={item.id}
                  {...item}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Todo;
