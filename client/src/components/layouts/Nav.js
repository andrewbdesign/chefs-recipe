import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__container">
          <h2 className="nav__logo">Chef'sRecipe</h2>
          <div className="nav__links">
            <a href="#!">Explore Cuisines</a>
            <a href="#!">Culinary Tips</a>
            <a href="#!">Tools</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
