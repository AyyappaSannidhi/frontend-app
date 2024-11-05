import { createSlice } from "@reduxjs/toolkit";
import translations from "../../js/translations/mainTranslations";

// Function to generate alankaraSchedule based on language
const generateAlankaraSchedule = (language) => {
    return [
      {
        col1: "",
        col2: translations.monday[language],
        col3: "Anjaneya swamy",
      },
      {
        col1: "",
        col2: translations.tuesday[language],
        col3: "Anjaneya swamy",
      },
      {
        col1: "",
        col2: translations.wednesday[language],
        col3: "Anjaneya swamy",
      },
      {
        col1: "",
        col2: translations.thursday[language],
        col3: "Anjaneya swamy",
      },
      {
        col1: "",
        col2: translations.friday[language],
        col3: "Anjaneya swamy",
      },
      {
        col1: "",
        col2: translations.saturday[language],
        col3: "Anjaneya swamy",
      },
      {
        col1: "",
        col2: translations.sunday[language],
        col3: "Anjaneya swamy",
      },
    ];
  };

const initialState = {
  alankaraSchedule: generateAlankaraSchedule('en'),
};

const alankaraSlice = createSlice({
  name: "alankara",
  initialState,
  reducers: {
    setAlankaraSchedule: (state, action) => {
      state.alankaraSchedule = action.payload; // Set the alankara schedule
    },
  },
});



// Action exports
export const { setAlankaraSchedule } = alankaraSlice.actions;

// Selector
export const selectAlankaraSchedule = (state) => state.alankara.alankaraSchedule;

// Middleware should call this function
export const generateAndSetAlankaraSchedule = (language) => (dispatch) => {
  const updatedSchedule = generateAlankaraSchedule(language);
  dispatch(setAlankaraSchedule(updatedSchedule));
  console.log("AlankaraSchedule changed")
};

export default alankaraSlice.reducer;