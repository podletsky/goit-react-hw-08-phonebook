import React from 'react';
import styles from '../contactList/ContactList.module.css';
import { selectFilter } from '../../redux/contacts/selectors/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contacts/contactsSlice/conactsSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };
  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search Contacts"
    />
  );
};

export default Filter;
