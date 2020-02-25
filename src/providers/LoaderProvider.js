import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoaderContext from 'contexts/LoaderContext';

const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const contextElement = {
    loading,
    setLoading,
  };

  return <LoaderContext.Provider value={contextElement}>{children}</LoaderContext.Provider>;
};

LoaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoaderProvider;
