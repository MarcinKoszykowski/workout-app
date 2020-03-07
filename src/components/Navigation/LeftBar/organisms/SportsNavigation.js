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
    {sports.map(({ icon, name, background }) => (
      <SportIcon icon={icon} name={name} key={name} background={background} />
    ))}
  </Wrapper>
);

export default SportsNavigation;
