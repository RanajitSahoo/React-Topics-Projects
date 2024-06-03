import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItems from "./components/TodoItems";
import EmptyMessage from "./components/EmptyMessage";

import TodoItemsContextProvider from "./store/todo-items-store";




function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <EmptyMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
