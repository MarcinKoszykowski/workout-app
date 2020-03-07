import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SportContext from 'contexts/SportContext';

const SportProvider = ({ children }) => {
  const [sportBackground, setSportBackground] = useState();

  const contextElement = {
    sportBackground,
    setSportBackground,
  };

  return <SportContext.Provider value={contextElement}>{children}</SportContext.Provider>;
};

SportProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SportProvider;
