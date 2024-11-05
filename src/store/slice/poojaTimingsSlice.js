// alankaraSlice.js
import { createSlice } from "@reduxjs/toolkit";
import translations from "../../js/translations/mainTranslations"; // Import your translations

// Function to generate PoojaTimings based on language
const generatePoojaTimings = (language) => {
    return [
        {
            col1:"",
            col2:"5:00 AM",
            col3: translations.ganapathiPooja[language]
    
        },
    
        {
            col1:"",
            col2:"6:00 AM",
            col3:translations.Pranayam[language]
    
        },
        {
            col1:"",
            col2:"7:00 AM",
            col3:translations.SankalpaPooja[language]
    
        },
        {
            col1:"",
            col2:"8:00 AM",
            col3:translations.ganapathiPooja[language]
    
        },
        {
            col1:"",
            col2:"9:00 AM",
            col3:translations.ganapathiPooja[language]
    
        },
        {
            col1:"",
            col2:"5:00 PM",
            col3:translations.ganapathiPooja[language]
    
        },
        {
            col1:"",
            col2:"6:00 PM",
            col3:translations.ganapathiPooja[language]
    
        },
    ];
  };

const initialState = {
  poojaTimings: generatePoojaTimings('en'),
};

const poojaTimingsSlice = createSlice({
  name: "pooja",
  initialState,
  reducers: {
    setPoojaTimings: (state, action) => {
      state.poojaTimings = action.payload; // Set the alankara schedule
    },
  },
});



// Action exports
export const { setPoojaTimings } = poojaTimingsSlice.actions;

// Selector
export const selectPoojaTimings = (state) => state.pooja.poojaTimings;

// Middleware should call this function
export const generateAndSetPoojaTimings = (language) => (dispatch) => {
  const updatedSchedule = generatePoojaTimings(language);
  dispatch(setPoojaTimings(updatedSchedule));
  console.log("setPoojaTimings changed")
};

export default poojaTimingsSlice.reducer;