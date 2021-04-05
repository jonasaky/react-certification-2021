import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
// import Fortune from '../Fortune';
import Layout from '../Layout';
import Detail from '../../pages/Detail';
import GlobalProvider from '../../providers/Global';
import Favorites from '../../pages/Favorites';
import FavDetail from '../../pages/FavDetail';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route exact path="/detail">
                <Detail />
              </Route>
              <Private exact path="/favorites">
                <Favorites />
              </Private>
              <Private exact path="/favdetail">
                <FavDetail />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            {/* <Fortune /> */}
          </Layout>
        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
