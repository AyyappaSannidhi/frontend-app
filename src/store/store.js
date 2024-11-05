import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slice/languageSlice';
import alankaraReducer from './slice/alankaraSlice';
import poojaTimingsReducer from './slice/poojaTimingsSlice';
import alankaraMiddleware from './middleWare/alankaraMiddleware'; // Import your middleware
import poojaTimingsMiddleware from './middleWare/poojaTimingsMiddleware'; // Import your middleware

const store = configureStore({
  reducer: {
    language: languageReducer,
    alankara: alankaraReducer,
    pooja: poojaTimingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(alankaraMiddleware,poojaTimingsMiddleware), // Add your middleware
});

export default store;