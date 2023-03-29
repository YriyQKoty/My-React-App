import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
    getUsers: builder.query({
        query: () => `users`,
      }),
  }),
})

export const { useGetUserByIdQuery, useGetUsersQuery } = api

