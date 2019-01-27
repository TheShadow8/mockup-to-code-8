import styled from 'styled-components';

import { black, white } from '../../utilities';

export default styled.button`
  display: inline-block;
  border: 1px solid ${black};
  border-radius: 50px;
  padding: 1.5rem 4rem;
  outline: none;
  background-color: transparent;
  font-weight: 700;
  cursor: pointer;
  width: ${props => props.width};

  &:hover {
    background-color: ${black};
    color: ${white};
  }
`;
