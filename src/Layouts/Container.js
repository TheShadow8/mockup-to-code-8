import styled from 'styled-components';

export default styled.div`
  ${props => {
    if (props.flex) {
      return `
      display: flex;
      justify-content: space-between;
      & > :not(:first-child) {
        margin-left: 3.5rem;
      }
     `;
    }
  }}
  width: 60vw;
  margin: 0 auto;
`;
