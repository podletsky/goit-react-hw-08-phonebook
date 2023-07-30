import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation/operation';

import styles from '../loginForm/login.module.css';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    // form.reset();
  };

  return (
    <form
      className={styles.formLogin}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className={styles.text}>
        Username
        <input className={styles.inputReg} type="text" name="name" />
      </label>
      <label className={styles.text}>
        Email
        <input className={styles.inputReg} type="email" name="email" />
      </label>
      <label className={styles.text}>
        Password
        <input className={styles.inputReg} type="password" name="password" />
      </label>
      <button className={styles.buttonFormReg} type="submit">
        Register
      </button>
    </form>
  );
};
