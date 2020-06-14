import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { main, login, sport, calendar } from 'data/routes';
import SportView from 'views/SportView';
import CalendarView from 'views/CalendarView';
import MainView from './views/MainView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';

const Routes = () => (
  <Switch>
    <Route exact path={main} component={MainView} />
    <Route exact path={login} component={LoginView} />
    <Route exact path={sport} component={SportView} />
    <Route exact path={calendar} component={CalendarView} />
    <Route component={NotFoundView} />
  </Switch>
);

export default Routes;
