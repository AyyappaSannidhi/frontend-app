import { configureStore } from '@reduxjs/toolkit';
import alankaraReducer from './slice/alankaraSlice';
import poojaTimingsReducer from './slice/poojaTimingsSlice';
import alankaraMiddleware from './middleWare/alankaraMiddleware'; // Import your middleware
import poojaTimingsMiddleware from './middleWare/poojaTimingsMiddleware'; // Import your middleware

const store = configureStore({
  reducer: {
    alankara: alankaraReducer,
    pooja: poojaTimingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(alankaraMiddleware,poojaTimingsMiddleware), // Add your middleware
});

export default store;