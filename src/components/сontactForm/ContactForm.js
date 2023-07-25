import React, { useState } from 'react';

import styles from '../contactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selestSelectors } from '../../redux/selectors/selectors.js';
import { addContacts } from '../../redux/operation/operation';
import Notiflix from 'notiflix';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selestSelectors);
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isDuplicateName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      Notiflix.Notify.info('Sorry, a contact with that name already exists!');
    } else {
      dispatch(
        addContacts({
          name: name,
          number: number,
        })
      );
      Notiflix.Notify.success('Super,a contact added successfully');
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
        required
      />
      <input
        className={styles.input}
        type="tel"
        name="number"
        value={number}
        onChange={handleNumberChange}
        placeholder="Phone Number"
        required
      />
      <button className={styles.buttonForm} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
