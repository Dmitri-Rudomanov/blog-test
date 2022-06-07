import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './phonebook-reducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './phonebook-reducer';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);

const exportedStor = {
  store,
};
export default exportedStor;
