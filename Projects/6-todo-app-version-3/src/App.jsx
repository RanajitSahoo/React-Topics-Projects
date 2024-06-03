import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItems from "./components/TodoItems";
import EmptyMessage from "./components/EmptyMessage";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
   
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems)
  }
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <EmptyMessage todoItems={todoItems} />
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />

    </center>
  );
}

export default App;
