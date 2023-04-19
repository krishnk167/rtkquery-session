import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './api/todosApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { quotesApi } from './api/quotesApi';

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    [quotesApi.reducerPath]: quotesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(todosApi.middleware)
      .concat(quotesApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from './api/todosApi';
