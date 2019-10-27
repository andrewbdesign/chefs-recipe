import React from 'react';
import Nav from './layouts/Nav';
import Landing from '../components/landing/index';
import Footer from './layouts/Footer';

const App = () => (
  <div className="app">
    <Nav />
    <Landing />
    <Footer />
  </div>
);

export default App;
