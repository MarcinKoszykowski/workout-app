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
  const [token, setToken] = useState('');
  const [userTraining, setUserTraining] = useState([]);
  const [userSportTraining, setUserSportTraining] = useState([]);
  const [deleteSportTraining, setDeleteSportTraining] = useState(false);
  const [calendarButtonVisibility, setCalendarButtonVisibility] = useState(false);

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
    userTraining,
    setUserTraining,
    userSportTraining,
    setUserSportTraining,
    deleteSportTraining,
    setDeleteSportTraining,
  };

  const otherElement = {
    token,
    setToken,
    loading,
    setLoading,
    userPanelVisibility,
    setUserPanelVisibility,
    mainButtonVisibility,
    setMainButtonVisibility,
    calendarButtonVisibility,
    setCalendarButtonVisibility,
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
