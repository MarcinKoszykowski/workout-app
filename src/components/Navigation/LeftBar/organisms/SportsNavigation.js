import React from 'react';
import styled from 'styled-components';
import sports from 'data/sports';
import SportIcon from '../molecules/SportIcon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SportsNavigation = () => (
  <Wrapper>
    {sports.map(({ icon, name }) => (
      <SportIcon icon={icon} name={name} key={name} />
    ))}
  </Wrapper>
);

export default SportsNavigation;
