import TodoItem from "../TodoItem";
import "./index.scss";
import React, { FC, useEffect, useState } from "react";
import { Post } from "../TodoItem";
import { useGetTodosQuery } from "../../store/api/api";

type PostArray = Post[];

const TodoList = () => {
  const { data, isLoading, error } = useGetTodosQuery("");
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="tasks">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ul className="tasks__list">
          {data?.map((el: Post) => (
            <TodoItem key={el.id} task={el.task} done={el.done} id={el.id} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default TodoList;
