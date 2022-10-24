import React from "react";
import ToDo from "./ToDo";
const TodoList = ({ toDos, setToDos }) => {
  console.log(toDos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {toDos.map((toDoss) => (
          <ToDo
            setToDos={setToDos}
            toDos={toDos}
            toDoss={toDoss}
            text={toDoss.text}
            key={toDoss.id}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
