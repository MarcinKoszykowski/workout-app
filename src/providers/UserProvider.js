import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from 'contexts/UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState();

  const contextElement = {
    user,
    setUser,
    login,
    setLogin,
    userName,
    setUserName
  };

  return <UserContext.Provider value={contextElement}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
