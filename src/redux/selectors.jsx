export const getContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  const contacts = state.contacts.items;
  const filter = state.filter;
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
