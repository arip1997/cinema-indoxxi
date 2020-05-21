import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className="nav">
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Akun</Link>
    </li>
    <li>
      <Link to={ROUTES.ARTIKEL}>Artikel</Link>
    </li>
    <li>
      <Link to={ROUTES.PENGGUNA}>Pengguna</Link>
    </li>
    <li>
      <Link to={ROUTES.LANDING}>Tentang</Link>
    </li>
    <li>
      <Link to={ROUTES.PROFIL}>Profil</Link>
    </li>
  </ul>
  
  </div>
);

const NavigationNonAuth = () => ( // tampilan awal npm start 
  <div className="nav">
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
  </div>
);

export default Navigation;