import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'context';

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [userDetails, setUserDetails] = useState({
    bmi: 0,
    data: {},
  });
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState('');
  const [training, setTraining] = useState({
    data: [],
    sportId: '',
    sportData: [],
    delete: false,
    sport: {},
  });
  const [visibility, setVisibility] = useState({
    userPanel: false,
    mainButton: false,
    calendarButton: false,
    modal: false,
  });

  const userElement = {
    user,
    setUser,
    userDetails,
    setUserDetails,
  };

  const sportElement = {
    training,
    setTraining,
  };

  const otherElement = {
    token,
    setToken,
    loading,
    setLoading,
    visibility,
    setVisibility,
    isLogged,
    setIsLogged,
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
