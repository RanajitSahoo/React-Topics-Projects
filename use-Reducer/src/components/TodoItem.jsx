import { useContext } from "react";
import Styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({todoName,todoDate}) {

  const context = useContext(TodoItemsContext);
  const onDeleteClick = context.delete;
  return (
    <div className={`${Styles.todoContainer} container ` } >
      <div className="row my-2">
        <div className="col-6 ">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className={`${Styles.todoButton} btn btn-danger`} onClick={()=>{onDeleteClick(todoName)}}><MdDelete/></button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
