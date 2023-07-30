import { NavLink } from 'react-router-dom';
import styles from './authNav.module.css';
export const AuthNav = () => {
  return (
    <div className={styles.boxAuth}>
      <NavLink className={styles.registerAuth} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.loginAuth} to="/login">
        LogIn
      </NavLink>
    </div>
  );
};
