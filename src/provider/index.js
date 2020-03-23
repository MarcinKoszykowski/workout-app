import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'context';

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [sportBackground, setSportBackground] = useState();
  const [user, setUser] = useState({});
  const [details, setDetails] = useState({});
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [userPanelVisibility, setUserPanelVisibility] = useState(false);
  const [mainButtonVisibility, setMainButtonVisibility] = useState(false);

  const userElement = {
    user,
    setUser,
    details,
    setDetails,
    userIsLogged,
    setUserIsLogged,
  };

  const sportElement = {
    sportBackground,
    setSportBackground,
    mainButtonVisibility,
    setMainButtonVisibility,
  };

  const otherElement = {
    loading,
    setLoading,
    userPanelVisibility,
    setUserPanelVisibility,
  };

  const contextElement = {
    ...userElement,
    ...sportElement,
    ...otherElement,
  };

  return <AppContext.Provider value={contextElement}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
