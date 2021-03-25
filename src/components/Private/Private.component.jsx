import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGlobal } from '../../providers/Global';

function Private({ children, ...rest }) {
  const { state } = useGlobal();
  const { isAuthenticated } = state;

  return (
    <Route {...rest} render={() => (isAuthenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
