const EmptyMessage = (props) => {
    return<>{props.todoItems.length === 0 && <h1>Empty list</h1>
    }</>;
};
export default EmptyMessage;
