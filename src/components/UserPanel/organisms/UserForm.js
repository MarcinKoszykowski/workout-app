import React, { useState, useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { user as userValue } from 'data/value';
import { user as userRoute } from 'data/api_routes';
import { checkEditInUserForm, setUrlAPI } from 'data/functions';
import AppContext from 'context';
import { blue } from 'styled/colors';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';

const Form = styled.form`
  position: relative;
  margin: auto;
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    padding: 25px 0;
  }

  @media screen and (max-width: 420px) {
    padding: 20px 0;
  }
`;

const FormButton = styled(Button)`
  margin-top: 50px;
  background-color: ${blue};
  border-color: ${blue};

  @media screen and (max-width: 576px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 420px) {
    margin-top: 20px;
  }
`;

const UserForm = () => {
  const { user } = useContext(AppContext);

  const {
    button: { save },
    form: { login, age, height, weight },
  } = userValue;

  const [formUser, setFormUser] = useState({
    login: '',
    age: '',
    height: '',
    weight: '',
  });

  const handleInputChange = e => {
    const value = {
      ...formUser,
      [e.target.name]: e.target.value,
    };
    setFormUser(value);
  };

  const setValue = value => (value || '');

  const setUser = () => {
    setFormUser({
      login: setValue(user.login),
      age: setValue(user.age),
      height: setValue(user.height),
      weight: setValue(user.weight),
    });
  };

  const checkStatus = data => {
    const { status } = data;

    if (status === 1) {
      console.log('ok'); // eslint-disable-line
    } else if (status === 2) {
      console.log('error'); // eslint-disable-line
    }
  };

  const handleInputOnSubmit = e => {
    e.preventDefault();

    if (checkEditInUserForm(formUser, user)) {
      axios
        .post(
          setUrlAPI(userRoute.update),
          {
            id: user.id,
            user: {
              login: formUser.login,
              age: formUser.age,
              height: formUser.height,
              weight: formUser.weight,
            },
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(result => result.data)
        .then(data => checkStatus(data))
        .catch(err => {
          console.error(err); // eslint-disable-line
        });
    } else {
      console.log('error'); // eslint-disable-line
    }
  };

  const handleCallbackFunction = useCallback(setUser, [0]);

  useEffect(() => {
    handleCallbackFunction();
  }, [handleCallbackFunction]);

  return (
    <Form autoComplete="off" onSubmit={e => handleInputOnSubmit(e)}>
      <FormInput onChange={e => handleInputChange(e)} type={login.type} value={setValue(formUser.login)} name={login.name} label={login.name} />
      <FormInput onChange={e => handleInputChange(e)} type={age.type} value={setValue(formUser.age)} name={age.name} label={age.name} />
      <FormInput
        onChange={e => handleInputChange(e)}
        type={height.type}
        value={setValue(formUser.height)}
        name={height.name}
        label={`${height.name} [cm]`}
      />
      <FormInput
        onChange={e => handleInputChange(e)}
        type={weight.type}
        value={setValue(formUser.weight)}
        name={weight.name}
        label={`${weight.name} [kg]`}
      />
      <FormButton>{save}</FormButton>
    </Form>
  );
};

export default UserForm;
