import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'context';

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [sport, setSport] = useState({});
  const [user, setUser] = useState({});
  const [userBMI, setUserBMI] = useState(0);
  const [details, setDetails] = useState({});
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [userPanelVisibility, setUserPanelVisibility] = useState(false);
  const [mainButtonVisibility, setMainButtonVisibility] = useState(false);

  const userElement = {
    user,
    setUser,
    userBMI,
    setUserBMI,
    details,
    setDetails,
    userIsLogged,
    setUserIsLogged,
  };

  const sportElement = {
    sport,
    setSport,
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
