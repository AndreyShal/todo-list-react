import { url } from "inspector";
import { api } from "./api";

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTodo: builder.mutation({
      query: (id) => ({
        body: id,
        url: "/",
        method: "POST",
      }),
      invalidatesTags: () => [{ type: "toDoList" }],
    }),

    updateTodo: builder.mutation({
      query: ({ id, ...rest }) => ({
        body: rest,
        url: `/${id}`,
        method: "PUT",
      }),
      invalidatesTags: () => [{ type: "toDoList" }],
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        body: id,
        method: "DELETE",
      }),
      invalidatesTags: () => [{ type: "toDoList" }],
    }),
  }),
});

export const { useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = todoApi;
