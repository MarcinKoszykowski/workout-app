import React, { useState } from 'react';
import styled from 'styled-components';
import { colorWithOpacity, white, blue } from 'styled/colors';
import FormInput from '../molecules/FormInput';
import FormButton from '../atoms/FormButton';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 5px 6px 6px;
  background-color: ${colorWithOpacity(white, 0.2)};
  border-left: 2px solid ${blue};

  @media screen and (max-width: 992px) {
    padding: 4px 4px 4px 5px;
  }

  @media screen and (max-width: 576px) {
    padding: 3px 3px 3px 4px;
  }

  @media screen and (max-width: 420px) {
    padding: 1px 2px 1px 3px;
  }
`;

const SportForm = () => {
  const [traningTime, setTraningTime] = useState(0);

  const handleInputChange = (e) => {
    setTraningTime(e.target.value);
  };

  return (
    <Form autoComplete="off">
      <FormInput
        onChange={(e) => handleInputChange(e)}
        value={Number(traningTime)}
        name="traningTime"
        label="traning time"
      />
      <FormButton />
    </Form>
  );
};

export default SportForm;
