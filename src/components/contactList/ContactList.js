import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operation/operation';
import {
  selectContacts,
  selectFilter,
  selectLoading,
} from '../../redux/contacts/selectors/selectors';
import styles from '../contactList/ContactList.module.css';
import { Button } from 'react-bootstrap';
import { PacmanLoader } from 'react-spinners';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <div>
      {isLoading ? (
        <div className="sr-only">
          <PacmanLoader size={15} color="#3669" />
        </div>
      ) : (
        <div className={styles.list}>
          {visibleContacts.map(contact => (
            <div key={contact.id}>
              <div className={styles.item}>
                <p className={styles.text}>
                  {contact.name}: {contact.number}
                </p>
                <div>
                  <Button
                    className={styles.button}
                    variant="danger"
                    type="button"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
