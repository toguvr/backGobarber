import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// import { SignIn, SignUp, Dashboard, Profile } from 'pages';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export const routes = {
  signin: '/',
  signup: '/signup',
  dashboard: '/dashboard',
  profile: '/profile',
};

export default function Routes() {
  return (
    <Switch>
      <Route path={routes.signup} component={SignUp} />
      <Route path={routes.dashboard} component={Dashboard} isPrivate />
      <Route path={routes.profile} component={Profile} isPrivate />
      <Route path={routes.signin} component={SignIn} />
    </Switch>
  );
}
