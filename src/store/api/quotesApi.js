import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const quotesApi = createApi({
  reducerPath: 'quotesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.quotable.io/',
  }),
  endpoints(builder) {
    return {
      getRandomQuote: builder.query({
        query: () => {
          return {
            url: '/random',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetRandomQuoteQuery } = quotesApi;
export { quotesApi };
