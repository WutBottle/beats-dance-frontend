import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;