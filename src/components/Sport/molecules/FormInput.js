import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { blue, white } from 'styled/colors';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: auto;
  margin-right: 15px;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    width: 70px;
  }

  @media screen and (max-width: 576px) {
    width: 60px;
  }

  @media screen and (max-width: 420px) {
    width: 50px;
  }
`;

const Label = styled.label`
  color: ${blue};
  font-size: 0.7rem;

  @media screen and (max-width: 992px) {
    font-size: 0.6rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.55rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 0.5rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.4rem;
  }
`;

const Input = styled.input`
  border: none;
  width: 80%;
  line-height: 1.5rem;
  font-size: 1.125rem;
  color: ${white};
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  @media screen and (max-width: 992px) {
    line-height: 1.3rem;
    font-size: 1rem;
  }

  @media screen and (max-width: 576px) {
    line-height: 1.1rem;
    font-size: 0.85rem;
    width: 75%;
  }

  @media screen and (max-width: 420px) {
    width: 95%;
    line-height: 1rem;
    font-size: 0.75rem;
  }
`;

const FormInput = ({ onChange, value, name, label }) => (
  <Wrapper>
    <Label htmlFor={name}>{label}</Label>
    <Input
      min="0"
      max="999"
      onChange={onChange}
      value={value}
      type="number"
      name={name}
      id={name}
      placeholder=" "
      required
    />
  </Wrapper>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
