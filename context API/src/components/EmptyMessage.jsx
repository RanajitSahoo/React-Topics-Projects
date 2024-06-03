import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const EmptyMessage = () => {
    const context = useContext(TodoItemsContext);
    const todoItems = context.items;
    return<>{todoItems.length === 0 && <h1 className="mt-5">Enj😊y your day</h1>
    }</>;
};
export default EmptyMessage;
