// alankaraMiddleware.js
import { setLanguage } from '../slice/languageSlice';
import { generateAndSetAlankaraSchedule } from '../slice/alankaraSlice';

const alankaraMiddleware = (store) => (next) => (action) => {
  next(action);

  if (action.type === setLanguage.type) {
    const currentLanguage = store.getState().language.currentLanguage; // Assuming your language slice has the current language
    store.dispatch(generateAndSetAlankaraSchedule(currentLanguage)); // Dispatch the action to update schedule
  }
};

export default alankaraMiddleware;