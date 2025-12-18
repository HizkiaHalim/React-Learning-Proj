import React, { Provider, ReactNode, useState } from "react";
import todo from "../models/todo";

type Props = {
  items: todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<Props>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

interface providerProps {
    children : ReactNode;
}

const TodosContextProvider = ({children}: providerProps) => {
  const [todos, setTodo] = useState<todo[]>([]);

  const addToArr = (text: string) => {
    const newTodo = new todo(text);

    setTodo((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const onRemoveTodo = (id: string) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: Props = {
    items: todos,
    addTodo: addToArr,
    removeTodo: onRemoveTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;