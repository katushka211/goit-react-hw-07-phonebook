export const getContacts = state => state.contacts.initialContacts;
export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  const contacts = state.contacts.initialContacts;
  const filter = state.filter;
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};
