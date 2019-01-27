import styled from 'styled-components';

import { highLineColor } from '../../utilities';

export default styled.div`
  content: '';
  height: 1px;
  width: ${props => props.width};
  background-color: ${highLineColor};
`;
