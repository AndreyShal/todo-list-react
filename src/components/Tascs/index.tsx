import Task from "../Task";
import "./index.scss";
import React, { FC, useEffect, useState } from "react";
import { Post } from "../Task";
import { useGetTodosQuery } from "../../store/api/api";

type PostArray = Post[];

const Tasks = () => {
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
            <Task key={el.id} task={el.task} done={el.done} id={el.id} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Tasks;
