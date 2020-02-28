import styled from 'styled-components';
import { blue } from 'styled/colors';

const User = styled.p`
  font-weight: 500;
  color: ${blue};
  margin-right: 15px;
  cursor: pointer;
  transition: margin 0.3s ease;

  @media screen and (max-width: 992px) {
    font-size: 0.95rem;
  }

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 0.9rem;
    margin-right: 12.5px;
  }

  @media screen and (max-width: 576px) {
    font-size: 0.85rem;
    margin-right: 10px;
  }

  @media screen and (max-width: 420px) {
    display: none;
  }
`;

export default User;
