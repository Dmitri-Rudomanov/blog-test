import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from './posts-reducer';
import { commentsApi } from './comments-reducer';

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    postsApi.middleware,
    commentsApi.middleware,
  ],
});
setupListeners(store.dispatch);

const exportedStor = {
  store,
};
export default exportedStor;
