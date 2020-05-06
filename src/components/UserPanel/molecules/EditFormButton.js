import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { purple } from 'styled/colors';
import Button from '../atoms/Button';

const StyleddButton = styled(Button)`
  margin: 0 auto 30px;
  background-color: ${purple};
  border-color: ${purple};

  @media screen and (min-width: 1024px) {
    &:hover {
      color: ${purple};
    }

    &:active {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      color: ${purple};
    }
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 25px;
  }

  @media screen and (max-width: 420px) {
    margin-bottom: 20px;
  }
`;

const EditFormButton = ({ text, onClick }) => (
  <StyleddButton onClick={onClick}>{text}</StyleddButton>
);

EditFormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default EditFormButton;
