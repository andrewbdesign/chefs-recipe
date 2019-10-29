import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecipes } from '../../actions/recipes';

const Header = ({ getRecipes }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onHandleSearch = e => {
    e.preventDefault();
    console.log('searchQuery', searchQuery);
    getRecipes(searchQuery);
  };

  const onUpdate = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__copy">
            <h1>Cook Delicious Dishes Today</h1>
            <p>
              Learn how to cook something that is simply delicious and
              nutritious!
            </p>
            <br />
            <form onSubmit={onHandleSearch}>
              <input
                className="header__searchbar"
                type="text"
                placeholder="Look up recipes..."
                onChange={onUpdate}
                value={searchQuery}
              />
              <button className="header__searchbutton" onClick={onHandleSearch}>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  getRecipes: PropTypes.func.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = {
  getRecipes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
