import React from "react";
import classes from "./TodoItem.module.css";
type Props = {
  id: string;
  text: string;
  onClickFunction: () => void;
};

export const Todo = ({ id, text, onClickFunction }: Props) => {
  return (
    <li className={classes.item} key={id} onClick={onClickFunction}>
      {text}
    </li>
  );
};
