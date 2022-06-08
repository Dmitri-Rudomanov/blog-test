import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bloggy-api.herokuapp.com',
  }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    fetchPosts: builder.query({
      query: () => '/posts',
      providesTags: ['Posts'],
    }),
    deletePosts: builder.mutation({
      query: postId => ({
        url: `/posts/${postId}`,
        method: 'delete',
      }),
      invalidatesTags: ['Posts'],
    }),
    updatePosts: builder.mutation({
      query: content => ({
        url: `/posts/${content.postId}`,
        method: 'PUT',
        body: {
          title: content.title,
          body: content.text,
        },
      }),
      invalidatesTags: ['Posts'],
    }),
    createPosts: builder.mutation({
      query: content => ({
        url: '/posts',
        method: 'POST',
        body: {
          title: content.title,
          body: content.text,
        },
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useFetchPostsQuery,
  useDeletePostsMutation,
  useUpdatePostsMutation,
  useCreatePostsMutation,
} = postsApi;
