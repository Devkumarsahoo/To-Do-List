import React from "react";

const ToDo = ({ text, setToDos, toDos, toDoss }) => {
  const DeleteHandler = () => {
    setToDos(toDos.filter((el) => el.id !== toDoss.id));
  };

  const CompleteHandler = () => {
    setToDos(
      toDos.map((item) => {
        if (item.id === toDoss.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${toDoss.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={CompleteHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={DeleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default ToDo;
