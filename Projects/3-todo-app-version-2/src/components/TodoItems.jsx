import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map(item => 
        <TodoItem todoName={item.name} todoDate={item.dueDate} />
      )}
    </div>
  );
};

export default TodoItems;
