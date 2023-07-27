import { Navigation } from '../navigation/Navigation';
import { UserMenu } from '../userMenu/UserMenu';
import { AuthNav } from '../authNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
