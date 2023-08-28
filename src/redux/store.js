import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import logger from 'redux-logger'

const rootReducer = combineReducers( {
    contacts: contactsReducer,
    filter: filterReducer,
})

export const store = configureStore({
  reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
});