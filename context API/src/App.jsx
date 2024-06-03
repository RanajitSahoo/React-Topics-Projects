import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItems from "./components/TodoItems";
import EmptyMessage from "./components/EmptyMessage";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((oldValue) => {
      const newTodoItems = [
        ...oldValue,
        {
          name: itemName,
          dueDate: itemDueDate,
        },
      ];
      return newTodoItems;
    });
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  const providerObject = {
    items: todoItems,
    addNew: addNewItem,
    delete: deleteItem
  };
  return (
    <TodoItemsContext.Provider value={providerObject}>
      <center className="todo-container">
        <AppName />
        <AddTodo  />
        <EmptyMessage  />
        <TodoItems  />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
