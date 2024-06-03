const EmptyMessage = (props) => {
    return<>{props.todoItems.length === 0 && <h1 className="mt-5">Enj😊y your day</h1>
    }</>;
};
export default EmptyMessage;
