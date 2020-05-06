import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from 'context';
import { colorWithOpacity, white, black } from 'styled/colors';
import CoverBackground from 'atoms/CoverBackground';
import { password } from 'data/value';
import UserForm from './organisms/UserForm';
import TopPanel from './organisms/TopPanel';
import EditFormButton from './molecules/EditFormButton';
import ChangePasswordForm from './organisms/ChangePasswordForm';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin: 0 auto;
  height: auto;
  top: 40%;
  right: 0;
  left: 0;
  z-index: 5;
  transform: translateY(-50%);
  background-color: ${colorWithOpacity(white, 0.95)};
  box-shadow: 0 0 10px 5px ${colorWithOpacity(black, 0.3)};
  border-radius: 15px;
  width: 450px;
  min-width: 280px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  @media screen and (max-width: 576px) {
    width: 380px;
  }

  @media screen and (max-width: 420px) {
    left: 20px;
    right: 20px;
    width: auto;
  }
`;

const UserPanel = () => {
  const { visibility, setVisibility } = useContext(AppContext);

  const { button } = password;

  const handleEditFormButtonOnClick = () =>
    setVisibility((prevState) => ({ ...prevState, passwordPanel: !prevState.passwordPanel }));

  return (
    visibility.userPanel && (
      <>
        <CoverBackground />
        <Wrapper>
          <TopPanel />
          {visibility.passwordPanel ? <ChangePasswordForm /> : <UserForm />}
          <EditFormButton
            onClick={handleEditFormButtonOnClick}
            text={visibility.passwordPanel ? button.details : button.password}
          />
        </Wrapper>
      </>
    )
  );
};

export default UserPanel;
