import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import i18n from 'i18next';
import { RootState } from '../../store/store';

const generatePoojaTimings = () => {
  return [
    {
      col1: "",
      col2: "5:00 AM",
      col3: i18n.t('common.ganapathiPooja'),
    },
    {
      col1: "",
      col2: "6:00 AM",
      col3: i18n.t('common.Pranayam'),
    },
    {
      col1: "",
      col2: "7:00 AM",
      col3: i18n.t('common.SankalpaPooja'),
    },
    {
      col1: "",
      col2: "8:00 AM",
      col3: i18n.t('common.ganapathiPooja'),
    },
    {
      col1: "",
      col2: "9:00 AM",
      col3: i18n.t('common.ganapathiPooja'),
    },
    {
      col1: "",
      col2: "5:00 PM",
      col3: i18n.t('common.ganapathiPooja'),
    },
    {
      col1: "",
      col2: "6:00 PM",
      col3: i18n.t('common.ganapathiPooja'),
    },
  ];
};

const initialState = {
  poojaTimings: generatePoojaTimings(),
};

const poojaTimingsSlice = createSlice({
  name: "pooja",
  initialState,
  reducers: {
    setPoojaTimings: (state, action: PayloadAction<any>) => {
      state.poojaTimings = action.payload;
    },
  },
});

export const { setPoojaTimings } = poojaTimingsSlice.actions;

export const selectPoojaTimings = (state: RootState) => state.pooja.poojaTimings;

export const generateAndSetPoojaTimings = () => (dispatch: Dispatch) => {
  const updatedTimings = generatePoojaTimings();
  dispatch(setPoojaTimings(updatedTimings));
  console.log("Pooja timings updated based on current language");
};

export default poojaTimingsSlice.reducer;