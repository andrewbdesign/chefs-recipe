import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__container">
          <h2 className="nav__logo">Chef'sRecipe</h2>
          <div className="nav__links">
            <a href="#!">Recipes</a>
            <a href="#!">Important Links</a>
            <a href="#!">Get Started</a>
          </div>
          <input
            className="nav__searchbar"
            type="text"
            placeholder="Look up recipes..."
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
