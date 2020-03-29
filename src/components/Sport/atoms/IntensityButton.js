import styled from 'styled-components';

const IntensityButton = styled.div`
  width: 22.5px;
  height: 22.5px;
  margin-right: 17.5px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  cursor: pointer;

  @media screen and (max-width: 992px) {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 17.5px;
    height: 17.5px;
    margin-right: 12.5px;
  }

  @media screen and (max-width: 576px) {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }

  @media screen and (max-width: 420px) {
    width: 12.5px;
    height: 12.5px;
    margin-right: 7.5px;
  }
`;

export default IntensityButton;
