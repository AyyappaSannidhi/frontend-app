// languageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    currentLanguage: 'en', // Default language
  },
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload; // Set the new language
    },
  },
});

// Export the action
export const { setLanguage } = languageSlice.actions;

// Selector to get current language
export const selectLanguage = (state) => state.language.currentLanguage;

export default languageSlice.reducer;