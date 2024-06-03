import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const context = useContext(TodoItemsContext);
  const todoItems = context.items;
  
  return (
    <div>
      {todoItems.map(item => 
        <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate}  />
      )}
    </div>
  );
};

export default TodoItems;
