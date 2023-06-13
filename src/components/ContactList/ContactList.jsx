import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getVisibleContacts, getLoading, getError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {visibleContacts.map(item => (
            <li key={item.id}>
              <Contact item={item} />
            </li>
          ))}
        </ul>
      )}
      {!visibleContacts.length && !error && !isLoading && (
        <p>There are no contacts in your phonebook</p>
      )}
      {error && <p>{error}</p>}
    </>
  );
};
