import React from "react";
import ToDo from "./ToDo";
const TodoList = ({ toDos, setToDos, filteredToDos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDos.map((toDoss) => (
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
