import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './phonebook-reducer';
import { commentsApi } from './comments-reducer';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    commentsApi.middleware,
  ],
});
setupListeners(store.dispatch);

const exportedStor = {
  store,
};
export default exportedStor;
