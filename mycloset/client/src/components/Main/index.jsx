import styles from './styles.module.css';
import { Navigate } from 'react-router-dom';
import { Route, useNavigate } from 'react-router-dom';

const Main = () => {
  const handleLogout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    window.location.reload();
  };
  const navigate = useNavigate();

  const handleProfileRedirect = () => {
    navigate('/Profile');
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>My Closet</h1>
        <div>
          <button className={styles.white_btn} onClick={handleProfileRedirect}>
            Perfil
          </button>
          <button className={styles.white_btn} onClick={handleLogout}>
            Sair
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Main;
