import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems />
      <TodoItems />
    </center>
  );
}

export default App;
