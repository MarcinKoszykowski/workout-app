import React from 'react';
import styled from 'styled-components';
import calendarIcon from 'assets/icons/calendar.svg';
import { white } from 'styled/colors';
import Text from '../atoms/Text';
import Icon from '../atoms/Icon';
import { getCurrentDate } from 'data/functions';

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

const DateInfo = () => (
  <Wrapper>
    <StyledIcon icon={calendarIcon} />
    <StyledText>{getCurrentDate()}</StyledText>
  </Wrapper>
);

export default DateInfo;
