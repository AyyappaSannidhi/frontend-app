// alankaraMiddleware.scripts
import { updateAlankaraSchedule } from '../slice/alankaraSlice.js';
import i18n from 'i18next';

const alankaraMiddleware = (store) => {
  // Listen to language changes
  i18n.on('languageChanged', () => {
    // Dispatch the action to update the alankara schedule when the language changes
    store.dispatch(updateAlankaraSchedule());
  });

  return (next) => (action) => next(action); // Standard middleware pattern
};

export default alankaraMiddleware;