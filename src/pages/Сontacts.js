import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Зміна імпорту тут
import { fetchContacts } from '../redux/contacts/operation/operation';
import { selestLoading } from '../redux/contacts/selectors/selectors';
import ContactForm from '../components/сontactForm/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selestLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </div>
  );
}
