import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.initialContacts);
  // const filter = useSelector(state => state.filter);

  // const deleteContactHandler = contactID => {
  //   dispatch(deleteContact(contactID));
  // };

  // const getVisiblesContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContacts = getVisiblesContacts();

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
