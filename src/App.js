import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'styled/GlobalStyle';
import { main, login, sport } from 'data/routes';
import LoginView from './views/LoginView';
import MainView from './views/MainView';
import UserProvider from 'providers/UserProvider';
import Loader from 'components/Loader/Loader';
import LoaderContext from 'contexts/LoaderContext';
import SportView from 'views/SportView';

const App = () => {
  const { loading } = useContext(LoaderContext);

  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        {loading && <Loader />}
        <Switch>
          <Route exact path={main} component={MainView} />
          <Route exact path={login} component={LoginView} />
          <Route exact path={sport} component={SportView} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
