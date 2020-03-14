import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'context';

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [sportBackground, setSportBackground] = useState();
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState();
  const [userPanelVisibility, setUserPanelVisibility] = useState(false);

  const userElement = {
    user,
    setUser,
    userName,
    setUserName,
  };

  const sportElement = {
    sportBackground,
    setSportBackground,
  };

  const otherElement = {
    loading,
    setLoading,
    login,
    setLogin,
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
