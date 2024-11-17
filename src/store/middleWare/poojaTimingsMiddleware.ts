// @ts-nocheck
import { generateAndSetPoojaTimings } from '../slice/poojaTimingsSlice.js';
import i18n from 'i18next';

const poojaTimingsMiddleware = (store) => {
  // Listen for language changes in i18n
  i18n.on('languageChanged', () => {
    // Dispatch the action to update pooja timings when the language changes
    store.dispatch(generateAndSetPoojaTimings());
  });

  return (next) => (action) => next(action); // Standard middleware pattern
};

export default poojaTimingsMiddleware;