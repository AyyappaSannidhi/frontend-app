import { configureStore, Middleware, MiddlewareAPI, Dispatch, AnyAction } from '@reduxjs/toolkit';
import alankaraReducer from './slice/alankaraSlice';
import poojaTimingsReducer from './slice/poojaTimingsSlice';
import alankaraMiddleware from './middleWare/alankaraMiddleware';
import poojaTimingsMiddleware from './middleWare/poojaTimingsMiddleware';
import userReducer from './slice/userSlice';

// Define the RootState type based on the reducers
export type RootState = {
  user: ReturnType<typeof userReducer>;
  alankara: ReturnType<typeof alankaraReducer>;
  pooja: ReturnType<typeof poojaTimingsReducer>;
};

// Define the AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Configure the store
const store = configureStore({
  reducer: {
    user: userReducer,
    alankara: alankaraReducer,
    pooja: poojaTimingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(alankaraMiddleware, poojaTimingsMiddleware),
});

// Export the store
export default store;