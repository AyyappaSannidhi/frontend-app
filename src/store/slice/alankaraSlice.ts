import { createSlice } from "@reduxjs/toolkit";
import i18n from 'i18next';

// Function to generate alankaraSchedule based on the current language
const generateAlankaraSchedule = () => {
  return [
    {
      col1: "",
      col2: i18n.t('common.monday'),
      col3: "Anjaneya swamy",
    },
    {
      col1: "",
      col2: i18n.t('common.tuesday'),
      col3: "Anjaneya swamy",
    },
    {
      col1: "",
      col2: i18n.t('common.wednesday'),
      col3: "Anjaneya swamy",
    },
    {
      col1: "",
      col2: i18n.t('common.thursday'),
      col3: "Anjaneya swamy",
    },
    {
      col1: "",
      col2: i18n.t('common.friday'),
      col3: "Anjaneya swamy",
    },
    {
      col1: "",
      col2: i18n.t('common.saturday'),
      col3: "Anjaneya swamy",
    },
    {
      col1: "",
      col2: i18n.t('common.sunday'),
      col3: "Anjaneya swamy",
    },
  ];
};

const initialState = {
  alankaraSchedule: generateAlankaraSchedule(), // Initialize based on the current language
};

const alankaraSlice = createSlice({
  name: "alankara",
  initialState,
  reducers: {
    setAlankaraSchedule: (state, action) => {
      state.alankaraSchedule = action.payload; // Update the alankara schedule
    },
  },
});

export const { setAlankaraSchedule } = alankaraSlice.actions;

// Selector to access alankara schedule in components
export const selectAlankaraSchedule = (state) => state.alankara.alankaraSchedule;

// Thunk to update the alankara schedule based on the current language
export const updateAlankaraSchedule = () => (dispatch) => {
  const updatedSchedule = generateAlankaraSchedule();
  dispatch(setAlankaraSchedule(updatedSchedule));
};

export default alankaraSlice.reducer;