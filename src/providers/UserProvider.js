import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserContext from 'contexts/UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    _id: '5e3ea1fd5c041e78dc1598e8',
    email: 'm.koszykowski92@gmail.com',
    password: '32cf01f7a5ba56d1576e2a4ff77dc5f3',
    creationDate: '2020-02-08T11:56:45.027Z',
  });
  const [login, setLogin] = useState(true);

  const contextElement = {
    user,
    setUser,
    login,
    setLogin,
  };

  return <UserContext.Provider value={contextElement}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
