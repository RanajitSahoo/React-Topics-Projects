import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems,onDeleteClick }) => {
  return (
    <div>
      {todoItems.map(item => 
        <TodoItem todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />
      )}
    </div>
  );
};

export default TodoItems;
