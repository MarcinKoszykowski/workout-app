import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { purple, colorWithOpacity } from 'styled/colors';
import animations from 'styled/animations';

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
  background-color: transparent;

  &:not(:placeholder-shown) + ${Label} {
    top: -20px;
    left: 0;
    font-size: 0.6rem;
  }

  &:focus {
    outline: none;

    & ~ ${Bar} {
      background: ${colorWithOpacity(purple, 0.8)};
    }

    & + ${Label} {
      top: -20px;
      left: 0;
      font-size: 0.65rem;
    }
  }
`;

const FormInput = ({ pattern, onChange, value, maxLength, type, name, label }) => (
  <Wrapper>
    <Input pattern={pattern} onChange={onChange} value={value} maxLength={maxLength} type={type} name={name} id={name} placeholder=" " />
    <Label htmlFor={name}>{label}</Label>
    <Bar />
  </Wrapper>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  maxLength: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
};

FormInput.defaultProps = {
  type: 'text',
  maxLength: '40',
  value: null,
  pattern: null,
};

export default FormInput;
