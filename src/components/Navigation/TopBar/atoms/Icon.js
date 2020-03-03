import styled from 'styled-components';

const Icon = styled.div`
  height: 25px;
  width: 25px;
  background: ${({ icon }) => `url(${icon})`} no-repeat center;
  cursor: pointer;
`;

export default Icon;
