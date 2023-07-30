import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './Navigation.module.css';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.navBox}>
      <nav>
        <NavLink className={styles.home} to="/">
          Home
        </NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
    </div>
  );
};
export default Navigation;
