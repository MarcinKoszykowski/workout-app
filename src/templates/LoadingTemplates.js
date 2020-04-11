import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { purple } from 'styled/colors';
import Loading from 'components/Loading/Loading';
import Wrapper from 'atoms/Wrapper';

const StyledWrapper = styled(Wrapper)`
  position: fixed;
  display: flex;
  align-items: center;
  text-align: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${purple};
  z-index: 999;
`;

const LoadingTemplates = ({ isVisibility }) =>
  isVisibility && (
    <StyledWrapper>
      <Loading />
    </StyledWrapper>
  );

LoadingTemplates.propTypes = {
  isVisibility: PropTypes.bool.isRequired,
};

export default LoadingTemplates;
