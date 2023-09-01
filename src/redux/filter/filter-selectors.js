import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/contacts-selector';

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  ({ items }, filter) =>
    items
      .filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
);