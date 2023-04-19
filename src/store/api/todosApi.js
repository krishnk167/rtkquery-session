import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3500',
  }),
  endpoints(builder) {
    return {
      getTodos: builder.query({
        query: () => {
          return {
            url: '/todos',
            method: 'GET',
          };
        },
        transformResponse: (res) => res.sort((a, b) => b.id - a.id),
        providesTags: ['Todos'],
      }),
      addTodo: builder.mutation({
        query: (todo) => {
          return {
            url: '/todos',
            method: 'POST',
            body: todo,
          };
        },
        invalidatesTags: ['Todos'],
      }),
      updateTodo: builder.mutation({
        query: (todo) => {
          return {
            url: `/todos/${todo.id}`,
            method: 'PATCH',
            body: todo,
          };
        },
        invalidatesTags: ['Todos'],
      }),
      deleteTodo: builder.mutation({
        query: ({ id }) => {
          return {
            url: `/todos/${id}`,
            method: 'DELETE',
          };
        },
        invalidatesTags: ['Todos'],
      }),
    };
  },
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
export { todosApi };
