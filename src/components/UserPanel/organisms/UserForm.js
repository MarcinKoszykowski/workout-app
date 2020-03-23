import React, { useState, useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { user as userValue } from 'data/value';
import { details as detailsRoute } from 'data/api_routes';
import { checkEditInUserForm, setDetailsInLocalStorage, getDataFromApi } from 'data/functions';
import AppContext from 'context';
import { blue } from 'styled/colors';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';

const Form = styled.form`
  position: relative;
  margin: auto;
  width: 100%;
  padding: 15px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    padding: 12.5px 0 25px;
  }

  @media screen and (max-width: 420px) {
    padding: 10px 0 20px;
  }
`;

const FormButton = styled(Button)`
  margin-top: 40px;
  background-color: ${blue};
  border-color: ${blue};

  @media screen and (min-width: 1024px) {
    &:hover {
      color: ${blue};
    }

    &:active {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      color: ${blue};
    }
  }

  @media screen and (max-width: 576px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 420px) {
    margin-top: 20px;
  }
`;

const UserForm = () => {
  const { details, setDetails, user } = useContext(AppContext);

  const {
    button: { save },
    form: { age, height, weight },
  } = userValue;

  const [formUser, setFormUser] = useState({
    age: '',
    height: '',
    weight: '',
  });

  const handleInputChange = (e) => {
    const value = {
      ...formUser,
      [e.target.name]: e.target.value,
    };
    setFormUser(value);
  };

  const setValue = (value) => value || '';

  const setUserDetails = () => {
    setFormUser({
      age: setValue(details.age),
      height: setValue(details.height),
      weight: setValue(details.weight),
    });
  };

  const checkStatus = (data) => {
    const { status } = data;

    if (status === 1) {
      setDetails({ ...formUser });
      setDetailsInLocalStorage(formUser);
    } else if (status === 2) {
      console.log('error'); // eslint-disable-line
    }
  };

  const handleInputOnSubmit = (e) => {
    e.preventDefault();

    if (!checkEditInUserForm(formUser, details)) {
      getDataFromApi(
        detailsRoute.add,
        {
          userId: user._id, // eslint-disable-line
          data: {
            age: formUser.age,
            height: formUser.height,
            weight: formUser.weight,
          },
        },
        checkStatus,
      );
    }
  };

  const handleCallbackFunction = useCallback(setUserDetails, [
    details.age,
    details.weight,
    details.height,
  ]);

  useEffect(() => {
    handleCallbackFunction();
  }, [handleCallbackFunction]);

  return (
    <Form autoComplete="off" onSubmit={(e) => handleInputOnSubmit(e)}>
      <FormInput
        onChange={(e) => handleInputChange(e)}
        max={age.max}
        value={formUser.age}
        name={age.name}
        label={age.name}
      />
      <FormInput
        onChange={(e) => handleInputChange(e)}
        max={height.max}
        value={formUser.height}
        name={height.name}
        label={`${height.name} [cm]`}
      />
      <FormInput
        onChange={(e) => handleInputChange(e)}
        max={weight.max}
        value={formUser.weight}
        name={weight.name}
        label={`${weight.name} [kg]`}
      />
      <FormButton>{save}</FormButton>
    </Form>
  );
};

export default UserForm;
