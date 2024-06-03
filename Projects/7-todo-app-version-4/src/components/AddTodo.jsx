import { useRef } from "react";
import Styles from "./AddTodo.module.css";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const todoNameRef = useRef("");
  const dueDateRef = useRef("");

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameRef.current.value;
    const dueDate = dueDateRef.current.value;
    todoNameRef.current.value = "";
    dueDateRef.current.value = "";
    console.log(`${todoName}  ${dueDate}`);
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="container ">
      <div>
        <form action="" className="row my-2" onSubmit={handleAddButtonClicked}>
          <div className="col-6">
            <input
              type="text"
              ref={todoNameRef}
              placeholder="enter todo here"
              className={`${Styles.todoInput} form-control`}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={dueDateRef}
              className={`${Styles.todoInput} form-control`}
            />
          </div>
          <div className="col-2">
            <button className={`${Styles.todoButton} btn btn-success`}>
              <BiSolidMessageSquareAdd />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddTodo;
