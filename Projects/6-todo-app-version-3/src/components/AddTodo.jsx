import { useState } from "react";
import Styles from "./AddTodo.module.css";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

function AddTodo({onNewItem}) {
  const [todoname,setTodoName]=useState("");
  const [dueDate,setdueDate]=useState("");
  const handleNameChange = (event)=>{
    setTodoName(event.target.value)
  };
  const handleDateChange = (event)=>{
    setdueDate(event.target.value)
  };
  const handleAddButtonClicked=() =>{
    onNewItem(todoname,dueDate);
    setdueDate("");
    setTodoName("");
  }
  return (
    <div className="container ">
      <div className="row my-2">
        <div className="col-6">
          <input
            type="text"
            placeholder="enter todo here"
            className={`${Styles.todoInput} form-control`}
            value={todoname}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" className={`${Styles.todoInput} form-control`} 
          value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button className={`${Styles.todoButton} btn btn-success`}
          onClick={handleAddButtonClicked}
          ><BiSolidMessageSquareAdd/></button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
