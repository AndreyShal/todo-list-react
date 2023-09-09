import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { todoApi } from "./todo.api";
// Define a service using a base URL and expected endpoints

const API_URL = "http://localhost:8080/todos";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["toDoList"],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `/?_sort=id&_order=DESC`,
      providesTags: () => [{ type: "toDoList" }],
    }),
  }),
});

export const { useGetTodosQuery } = api;
