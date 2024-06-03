import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItems from "./components/TodoItems";
import EmptyMessage from "./components/EmptyMessage";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to college",
      dueDate: "5/10/2024",
    },
    {
      name: "Red Int",
      dueDate: "23/05/2024",
    },
  ];
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <EmptyMessage todoItems={todoItems}/>
      <TodoItems todoItems={todoItems}/>
    </center>
  );
}

export default App;
