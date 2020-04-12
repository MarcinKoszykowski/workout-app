import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import animations from 'styled/animations';
import { purple, colorWithOpacity, lightGrey, lightRed, red } from 'styled/colors';
import eyeIcon from 'assets/icons/eye.svg';
import eyeSlashIcon from 'assets/icons/eye-slash.svg';
import eyeIconWhite from 'assets/icons/eye-white.svg';
import eyeSlashIconWhite from 'assets/icons/eye-slash-white.svg';

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 25px 0;
  flex-shrink: 0;
  animation: ${animations.opacityZeroToOne} 0.3s ease-in-out;
`;

const Label = styled.label`
  position: absolute;
  color: ${purple};
  font-size: 0.9rem;
  top: 3px;
  left: 5px;
  transition: top 0.2s ease, left 0.2s ease, font 0.2s ease;

  @media screen and (max-width: 768px) {
    color: ${lightGrey};
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 1px;
  background-color: ${colorWithOpacity(purple, 0.6)};
  transition: background-color 0.2s ease;

  @media screen and (max-width: 768px) {
    background: ${lightGrey};
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  line-height: 22px;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    color: ${lightGrey};
  }

  &:not(:placeholder-shown) + ${Label} {
    top: -20px;
    left: 0;
    font-size: 0.6rem;

    @media screen and (max-width: 768px) {
      color: ${colorWithOpacity(lightGrey, 0.8)};
    }
  }

  &:focus {
    outline: none;

    & ~ ${Bar} {
      background-color: ${colorWithOpacity(purple, 0.8)};

      @media screen and (max-width: 768px) {
        background-color: ${colorWithOpacity(lightGrey, 0.7)};
      }
    }

    & + ${Label} {
      top: -20px;
      left: 0;
      font-size: 0.65rem;

      @media screen and (max-width: 768px) {
        color: ${colorWithOpacity(lightGrey, 0.7)};
      }
    }
  }
`;

const ErrorText = styled.span`
  position: absolute;
  left: 5px;
  bottom: -11px;
  font-size: 0.5rem;
  font-weight: 600;
  color: ${lightRed};
  opacity: ${({ isVisibility }) => (isVisibility ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    color: ${red};
  }

  @media screen and (max-width: 420px) {
    font-size: 0.45rem;
  }
`;

const EyeIcon = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: url(${({ slash }) => (slash ? eyeSlashIcon : eyeIcon)}) no-repeat center;

  @media screen and (max-width: 768px) {
    background-image: url(${({ slash }) => (slash ? eyeSlashIconWhite : eyeIconWhite)});
  }
`;

const FormInput = ({
  onChange,
  value,
  maxLength,
  type,
  name,
  label,
  eyeOnClick,
  slash,
  password,
  pattern,
  errorText,
}) => {
  const [errorVisibility, setErrorVisibility] = useState(false);

  const handleOnInvalid = () => {
    if (value.length === 0) {
      setErrorVisibility(true);
      setTimeout(() => setErrorVisibility(false), 4000);
      return;
    }

    setErrorVisibility(true);
    setTimeout(() => setErrorVisibility(false), 4000);
  };

  return (
    <Wrapper>
      <Input
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        type={type}
        name={name}
        id={name}
        pattern={pattern}
        onInvalid={handleOnInvalid}
        required
        placeholder=" "
      />
      <Label htmlFor={name}>{label}</Label>
      <Bar />
      {password && <EyeIcon slash={slash} onClick={eyeOnClick} />}
      <ErrorText isVisibility={errorVisibility}>{errorText}</ErrorText>
    </Wrapper>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  eyeOnClick: PropTypes.func,
  slash: PropTypes.bool,
  password: PropTypes.bool,
  type: PropTypes.string,
  maxLength: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errorText: PropTypes.string,
  pattern: PropTypes.string,
};

FormInput.defaultProps = {
  type: 'text',
  eyeOnClick: null,
  slash: false,
  password: false,
  maxLength: '40',
  value: null,
  errorText: 'empty',
  pattern: null,
};

export default FormInput;
