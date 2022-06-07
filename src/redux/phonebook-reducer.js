import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { combineReducers } from 'redux';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6260fbd1f429c20deb98a05b.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: content => ({
        url: '/contacts',
        method: 'POST',
        body: {
          id: content.id,
          name: content.name,
          number: content.number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

const filterSlice = createSlice({
  name: 'contacts',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => {
      return action.payload;
    },
  },
});
const contactReducer = combineReducers({
  filter: filterSlice.reducer,
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
} = contactsApi;
export const { changeFilter } = filterSlice.actions;
export default contactReducer;
