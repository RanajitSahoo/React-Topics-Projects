import Styles from "./TodoItem.module.css";
function TodoItem({todoName,todoDate}) {
  return (
    <div className={`${Styles.todoContainer} container ` } >
      <div className="row my-2">
        <div className="col-6 ">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button class={`${Styles.todoButton} btn btn-danger`}>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
