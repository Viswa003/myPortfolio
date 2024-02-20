// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/components/About" exact component={About} />
        <Route path="/components/Projects" component={Projects} />
        <Route path="components/Contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
