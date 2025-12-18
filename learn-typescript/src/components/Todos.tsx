import { Todo } from "./Todo";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";
import { useContext } from "react";

export const Todos = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <div>
      <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
          <Todo
            id={item.id}
            text={item.text}
            onClickFunction={todosCtx.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};
