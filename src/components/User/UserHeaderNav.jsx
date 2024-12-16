import React from 'react';
import { UserContext } from '../../UserContext';
import { NavLink } from 'react-router-dom';
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AdiocionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState();
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {mobile && `Minhas fotos`}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && `estatisticas`}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdiocionarFoto />
        {mobile && `adicionar foto`}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && `Sair`}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
