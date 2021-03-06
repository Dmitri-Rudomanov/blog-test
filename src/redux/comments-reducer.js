import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bloggy-api.herokuapp.com',
  }),
  tagTypes: ['Comments'],
  endpoints: builder => ({
    fetchComments: builder.query({
      query: () => '/comments',
      providesTags: ['Comments'],
    }),
    deleteComments: builder.mutation({
      query: commentId => ({
        url: `/comments/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Comments'],
    }),
    createComments: builder.mutation({
      query: content => ({
        url: '/comments',
        method: 'POST',
        body: {
          postId: content.PostId,
          body: content.text,
        },
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const {
  useFetchCommentsQuery,
  useDeleteCommentsMutation,
  useCreateCommentsMutation,
} = commentsApi;
