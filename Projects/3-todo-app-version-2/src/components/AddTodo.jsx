import Styles from "./AddTodo.module.css"

function AddTodo() {
  return (
    <div className="container ">
      <div className="row my-2">
        <div className="col-6">
          <input
            type="text"
            placeholder="enter todo here"
            className={`${Styles.todoInput} form-control`}
          />
        </div>
        <div className="col-4">
          <input type="date" className={`${Styles.todoInput} form-control`} />
        </div>
        <div className="col-2">
          <button className={`${Styles.todoButton} btn btn-success`}>Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
