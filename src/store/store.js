import { configureStore } from '@reduxjs/toolkit';
import alankaraReducer from './slice/alankaraSlice';
import poojaTimingsReducer from './slice/poojaTimingsSlice';
import alankaraMiddleware from './middleWare/alankaraMiddleware';
import poojaTimingsMiddleware from './middleWare/poojaTimingsMiddleware';
import userReducer from './slice/userSlice';

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