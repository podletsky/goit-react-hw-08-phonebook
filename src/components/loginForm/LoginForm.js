import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation/operation';
import styles from './login.module.css';
const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form
      className={styles.formLogin}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <label className={styles.text}>
        Email
        <input className={styles.inputReg} type="email" name="email" />
      </label>
      <label className={styles.text}>
        Password
        <input className={styles.inputReg} type="password" name="password" />
      </label>
      <button className={styles.buttonFormReg} type="submit">
        GO
      </button>
    </form>
  );
};
export default LoginForm;
