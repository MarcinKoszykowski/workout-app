import React from 'react';
import styled from 'styled-components';
import { app } from 'data/value';
import Loader from './molecules/Loader';
import Background from './atoms/Background';
import Text from './atoms/Text';

const Box = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  z-index: 2;
`;

const Loading = () => (
  <>
    <Background />
    <Box>
      <Text>{app.name}</Text>
      <Loader />
    </Box>
  </>
);

export default Loading;
