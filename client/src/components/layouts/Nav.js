import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__container">
          <Link to="/">
            <h2 className="nav__logo">Chef'sRecipe</h2>
          </Link>
          <div className="nav__links">
            <a href="#!">Cuisines</a>
            <a href="#!">Tips</a>
            <a href="#!">Tools</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
