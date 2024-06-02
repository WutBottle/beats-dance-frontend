// routers/index.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loginPage from '../pages/LoginPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        {/* 其他路由 */}
      </Switch>
    </Router>
  );
};

export default AppRouter;