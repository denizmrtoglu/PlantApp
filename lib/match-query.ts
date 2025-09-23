import { TypedUseQueryHookResult } from "@reduxjs/toolkit/query/react";

/**
 * Matches the state of a Redux Toolkit Query result to a corresponding handler.
 *
 * @template E - Type of the error object.
 * @template D - Type of the data used in the query.
 * @template RL - Type returned by the idle and loading handlers.
 * @template RE - Type returned by the error handler.
 * @template RS - Type returned by the success handler.
 * @template RT - Type of the query result data.
 *
 * @param {TypedUseQueryHookResult<RT, D, any>} queryResult - The result of the query hook from Redux Toolkit Query.
 * @param {Object} matches - An object containing handlers for each possible state of the query.
 * @param {Function} matches.idle - Handler for the idle state.
 * @param {Function} matches.loading - Handler for the loading state.
 * @param {Function} matches.error - Handler for the error state. Receives the error object as an argument.
 * @param {Function} matches.success - Handler for the success state. Receives the query result data as an argument.
 *
 * @returns {RL | RE | RS} The result of the matched handler.
 *
 * @example
 * const queryResult = useGetSomeDataQuery();
 * const result = matchQuery(queryResult, {
 *   idle: () => <div>Idle</div>,
 *   loading: () => <div>Loading...</div>,
 *   error: (error) => <div>Error: {error.message}</div>,
 *   success: (data) => <div>Data: {data}</div>,
 * });
 */
export const matchQuery = <E, D, RL, RE, RS, RT>(
  queryResult: TypedUseQueryHookResult<RT, D, any>,
  matches: {
    idle?: () => RL;
    loading: () => RL;
    error: (error: E) => RE;
    success: (data: RT) => RS;
  }
): RL | RE | RS => {
  switch (true) {
    case queryResult.isLoading:
      return matches.loading();
    case queryResult.isError:
      return matches.error(queryResult.error);
    case queryResult.isSuccess:
      return matches.success(queryResult.data!);
    default:
      return matches?.idle ? matches.idle() : matches.loading();
  }
};
