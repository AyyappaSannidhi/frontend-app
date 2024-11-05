// alankaraMiddleware.js
import { setLanguage } from '../slice/languageSlice';
import { generateAndSetPoojaTimings } from '../slice/poojaTimingsSlice';

const poojaTimingsMiddleware = (store) => (next) => (action) => {
  next(action);

  if (action.type === setLanguage.type) {
    const currentLanguage = store.getState().language.currentLanguage; // Assuming your language slice has the current language
    store.dispatch(generateAndSetPoojaTimings(currentLanguage)); // Dispatch the action to update schedule
  }
};

export default poojaTimingsMiddleware;