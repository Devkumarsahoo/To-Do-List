import React, { useState } from "react";
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
        setFilterToDos(toDos.filter((todo) => todo.completed) === true);
        break;
      case "incompleted":
        setFilterToDos(toDos.filter((todo) => todo.completed) === true);
        break;
      default:
        setFilterToDos(toDos.filter);
    }
  };
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
      <TodoList setToDos={setToDos} toDos={toDos} />
    </div>
  );
}

export default App;
