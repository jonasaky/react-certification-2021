import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
// import Fortune from '../Fortune';
import Layout from '../Layout';
import Detail from '../../pages/Detail';
import GlobalProvider from '../../providers/Global';

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
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
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <Fortune /> */}
        </Layout>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
