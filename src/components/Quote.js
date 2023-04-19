import React from 'react';
import { useGetRandomQuoteQuery } from '../store/api/quotesApi';

const Quote = () => {
  const { data, isFetching, isSuccess, refetch } = useGetRandomQuoteQuery(
    null,
    {
      pollingInterval: 3000,
    }
  );

  return (
    <>
      <footer>
        {isSuccess && (
          <h3>
            <b>{data.content}</b> By - {data.author}
          </h3>
        )}
        <button onClick={refetch}>
          {isFetching ? 'Refreshing...' : 'Refresh'}
        </button>
      </footer>
    </>
  );
};

export default Quote;
