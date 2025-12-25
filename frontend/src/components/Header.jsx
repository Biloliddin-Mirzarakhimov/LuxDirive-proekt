import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="nav-logo">
          LuxDrive
        </Link>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/add-car">Добавить авто</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;