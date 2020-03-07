import React from 'react';
import styled from 'styled-components';
import calendarIcon from 'assets/icons/calendar.svg';
import { white } from 'styled/colors';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledText = styled(Text)`
  color: ${white};
  margin-left: 15px;
  margin-right: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledIcon = styled(Icon)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const DateInfo = () => {
  const getDateInfo = () => {
    const date = new Date();
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <Wrapper>
      <StyledIcon icon={calendarIcon} />
      <StyledText>{getDateInfo()}</StyledText>
    </Wrapper>
  );
};

export default DateInfo;
