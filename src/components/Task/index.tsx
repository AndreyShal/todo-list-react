import { useEffect, useState } from "react";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../../store/api/todo.api";
import "./index.scss";
import clsx from "clsx";

export interface Post {
  id: string;
  task: string;
  done: boolean;
}

const Task: React.FC<Post> = ({ id, task, done }) => {
  const [value, setValue] = useState(task);
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <li className={clsx("task", done && "task--done")}>
      <label>
        <input className="task__input" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={async () => await updateTodo({ id, task, done: !done })}>Done</button>
        <button onClick={async () => await deleteTodo(id)}>Delete</button>
        <button onClick={async () => await updateTodo({ id, task: value, done })}>Save</button>
      </label>
    </li>
  );
};

export default Task;
