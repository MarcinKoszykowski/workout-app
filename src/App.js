import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import { main, login, sport } from 'data/routes';
import LoginView from './views/LoginView';
import MainView from './views/MainView';
import Loader from 'components/Loader/Loader';
import LoaderContext from 'contexts/LoaderContext';
import UserProvider from 'providers/UserProvider';
import SportView from 'views/SportView';
import SportProvider from 'providers/SportProvider';

const App = () => {
  const { loading } = useContext(LoaderContext);

  return (
    <UserProvider>
      <SportProvider>
        <BrowserRouter>
          <GlobalStyle />
          {loading && <Loader />}
          <Switch>
            <Route exact path={main} component={MainView} />
            <Route exact path={login} component={LoginView} />
            <Route exact path={sport} component={SportView} />
          </Switch>
        </BrowserRouter>
      </SportProvider>
    </UserProvider>
  );
};

export default App;
