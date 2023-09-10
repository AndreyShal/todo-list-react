import { useEffect, useState } from "react";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../../store/api/todo.api";
import { Button, Textarea } from "@chakra-ui/react";
import "./index.scss";
import clsx from "clsx";

export interface Post {
  id: string;
  task: string;
  done: boolean;
}

const Task: React.FC<Post> = ({ id, task, done }) => {
  const [value, setValue] = useState(task);
  const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();

  return (
    <li className={clsx("task", done && "task--done")}>
      <Textarea className="task__input" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={async () => await updateTodo({ id, task, done: !done })} isLoading={isUpdating} colorScheme="teal" size="xs">
        Done
      </Button>
      <Button onClick={async () => await deleteTodo(id)} colorScheme="red" size="xs">
        Delete
      </Button>
      <Button onClick={async () => await updateTodo({ id, task: value, done })} colorScheme="green" size="xs">
        Save
      </Button>
    </li>
  );
};

export default Task;
