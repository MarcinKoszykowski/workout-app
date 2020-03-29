import React, { useState } from 'react';
import styled from 'styled-components';
import { colorWithOpacity, white, blue, green, orange, lightRed } from 'styled/colors';
import FormInput from '../molecules/FormInput';
import FormButton from '../atoms/FormButton';
import IntensityButton from '../atoms/IntensityButton';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

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
    padding: 2px 2px 2px 3px;
  }

  @media screen and (max-width: 420px) {
    padding: 0 1px 0 2px;
  }
`;

const SportForm = () => {
  const [traningTime, setTraningTime] = useState(0);
  const [intensityButtonColor, setIntensityButtonColor] = useState(orange);

  const handleInputChange = (e) => {
    setTraningTime(e.target.value);
  };

  const intensityButtonOnClick = () => {
    if (intensityButtonColor === orange) {
      setIntensityButtonColor(lightRed);
    } else if (intensityButtonColor === lightRed) {
      setIntensityButtonColor(green);
    } else {
      setIntensityButtonColor(orange);
    }
  };

  return (
    <Wrapper>
      <IntensityButton onClick={intensityButtonOnClick} color={intensityButtonColor} />
      <Form autoComplete="off">
        <FormInput
          onChange={(e) => handleInputChange(e)}
          value={Number(traningTime)}
          name="traningTime"
          label="traning time"
        />
        <FormButton />
      </Form>
    </Wrapper>
  );
};

export default SportForm;
