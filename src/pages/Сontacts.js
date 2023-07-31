import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Зміна імпорту тут
import { fetchContacts } from '../redux/contacts/operation/operation';
import { selectLoading } from '../redux/contacts/selectors/selectors';
import ContactForm from '../components/сontactForm/ContactForm';
import ContactList from '../components/contactList/ContactList';
import Filter from '../components/filter/Filter';
import styles from '../components/loginForm/login.module.css';
export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contacts}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </div>
  );
}
