function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row my-2">
        <div className="col-6">
          <input
            type="text"
            placeholder="enter todo here"
            class="form-control"
          />
        </div>
        <div className="col-4">
          <input type="date" class="form-control" />
        </div>
        <div className="col-2">
          <button class="btn btn-success button">Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
