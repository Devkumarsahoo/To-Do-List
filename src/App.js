import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterToDos, setFilterToDos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterToDos(toDos.filter((toDoss) => toDoss.completed === true));
        break;
      case "uncompleted":
        setFilterToDos(toDos.filter((todos) => todos.completed === false));
        break;
      default:
        setFilterToDos(toDos);
        break;
    }
  };
  useEffect(
    () => {
      filterHandler();
    },
    [toDos],
    [status]
  );
  return (
    <div className="App">
      <header>
        <h1>To Do List By Dev</h1>
      </header>
      <Form
        toDos={toDos}
        inputText={inputText}
        setToDos={setToDos}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList setToDos={setToDos} toDos={toDos} filteredToDos={filterToDos} />
    </div>
  );
}
export default App;
