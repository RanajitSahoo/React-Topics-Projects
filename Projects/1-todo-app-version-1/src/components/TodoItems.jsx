function TodoItems() {
  let todoName = "Buy Milk ";
  let todoDate = "21/05/2024";
  return (
    <div className="container todo" >
      <div className="row my-2">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button class="btn btn-danger button">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default TodoItems;
