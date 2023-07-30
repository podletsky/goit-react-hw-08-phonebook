import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation/operation';
import { useAuth } from '../../hooks/useAuth';
import styles from '../../components/loginForm/login.module.css';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p className={styles.textHi}>Welcome, {user.name}</p>
      <button
        className={styles.buttonFormOut}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
