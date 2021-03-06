import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { functionWithTimeout } from 'helpers/functions';
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

  ${({ userPanel }) =>
    userPanel &&
    css`
      @media screen and (max-width: 576px) {
        margin: 20px 0;
        width: 85%;
      }
    `}
`;

const Label = styled.label`
  position: absolute;
  color: ${purple};
  font-size: 0.9rem;
  top: 3px;
  left: 5px;
  transition: top 0.2s ease, left 0.2s ease, font 0.2s ease;

  ${({ userPanel }) =>
    !userPanel &&
    css`
      @media screen and (max-width: 768px) {
        color: ${lightGrey};
      }
    `}
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 1px;
  background-color: ${colorWithOpacity(purple, 0.6)};
  transition: background-color 0.2s ease;

  ${({ userPanel }) =>
    !userPanel &&
    css`
      @media screen and (max-width: 768px) {
        background: ${lightGrey};
      }
    `}
`;

const Input = styled.input`
  border: none;
  width: 100%;
  line-height: 22px;
  background-color: transparent;

  ${({ userPanel }) =>
    !userPanel &&
    css`
      @media screen and (max-width: 768px) {
        color: ${lightGrey};
      }
    `}

  &:not(:placeholder-shown) + ${Label} {
    top: -18px;
    left: 0;
    font-size: 0.6rem;

    ${({ userPanel }) =>
      !userPanel &&
      css`
        @media screen and (max-width: 768px) {
          color: ${colorWithOpacity(lightGrey, 0.8)};
        }
      `}
  }

  &:focus {
    outline: none;

    & ~ ${Bar} {
      background-color: ${colorWithOpacity(purple, 0.8)};

      ${({ userPanel }) =>
        !userPanel &&
        css`
          @media screen and (max-width: 768px) {
            background-color: ${colorWithOpacity(lightGrey, 0.7)};
          }
        `}
    }

    & + ${Label} {
      top: -18px;
      left: 0;
      font-size: 0.65rem;

      ${({ userPanel }) =>
        !userPanel &&
        css`
          @media screen and (max-width: 768px) {
            color: ${colorWithOpacity(lightGrey, 0.7)};
          }
        `}
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

  ${({ userPanel }) =>
    !userPanel &&
    css`
      @media screen and (max-width: 768px) {
        color: ${red};
      }
    `}

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

  ${({ userPanel }) =>
    !userPanel &&
    css`
      @media screen and (max-width: 768px) {
        background-image: url(${({ slash }) => (slash ? eyeSlashIconWhite : eyeIconWhite)});
      }
    `}
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
  userPanel,
}) => {
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
    <Wrapper userPanel={userPanel}>
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
        userPanel={userPanel}
      />
      <Label userPanel={userPanel} htmlFor={name}>
        {label}
      </Label>
      <Bar userPanel={userPanel} />
      {password && <EyeIcon userPanel={userPanel} slash={slash} onClick={eyeOnClick} />}
      <ErrorText userPanel={userPanel} isVisibility={errorVisibility}>
        {errorText}
      </ErrorText>
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
  userPanel: PropTypes.bool,
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
  userPanel: false,
};

export default FormInput;
