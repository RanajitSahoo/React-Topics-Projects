import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext();

const todoReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const providerObject = {
    items: todoItems,
    addNew: addNewItem,
    delete: deleteItem,
  };
  return (
    <TodoItemsContext.Provider value={providerObject}>
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
