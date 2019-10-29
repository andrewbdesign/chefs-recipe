import React, { Fragment } from 'react';
import Nav from './layouts/Nav';
import Landing from '../components/landing/index';
import Recipe from '../components/recipe/index';
import Footer from './layouts/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <div className="app">
            <Nav />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/recipe" component={Recipe} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
