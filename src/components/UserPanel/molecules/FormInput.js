import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { functionWithTimeout } from 'helpers/functions';
import animations from 'styled/animations';
import { purple, colorWithOpacity, lightRed } from 'styled/colors';

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 25px 0;
  flex-shrink: 0;
  animation: ${animations.opacityZeroToOne} 0.3s ease-in-out;

  @media screen and (max-width: 576px) {
    margin: 20px 0;
    width: 85%;
  }
`;

const Label = styled.label`
  position: absolute;
  color: ${purple};
  font-size: 0.9rem;
  top: 3px;
  left: 5px;
  transition: top 0.2s ease, left 0.2s ease, font 0.2s ease;
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 1px;
  background: ${colorWithOpacity(purple, 0.6)};
  transition: background 0.2s ease;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  line-height: 22px;
  font-size: 0.95rem;
  background-color: transparent;

  &:not(:placeholder-shown) + ${Label} {
    top: -18px;
    left: 0;
    font-size: 0.6rem;
  }

  &:focus {
    outline: none;

    & ~ ${Bar} {
      background: ${colorWithOpacity(purple, 0.8)};
    }

    & + ${Label} {
      top: -18px;
      left: 0;
      font-size: 0.63rem;
    }
  }
`;

const ErrorText = styled.span`
  position: absolute;
  left: 1px;
  bottom: -11px;
  font-size: 0.5rem;
  font-weight: 600;
  color: ${lightRed};
  opacity: ${({ isVisibility }) => (isVisibility ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const FormInput = ({ onChange, errorText, pattern, value, name, label }) => {
  const [errorVisibility, setErrorVisibility] = useState(false);

  const errorFunction = () => functionWithTimeout(setErrorVisibility, true, false, 4000);
  const handleOnInvalid = () => {
    if (value.length === 0) {
      errorFunction();
      return;
    }
    errorFunction();
  };

  return (
    <Wrapper>
      <Input
        onChange={onChange}
        value={value}
        type="text"
        name={name}
        id={name}
        placeholder=" "
        pattern={pattern}
        onInvalid={handleOnInvalid}
        required
      />
      <Label htmlFor={name}>{label}</Label>
      <Bar />
      <ErrorText isVisibility={errorVisibility}>{errorText}</ErrorText>
    </Wrapper>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
};

export default FormInput;
