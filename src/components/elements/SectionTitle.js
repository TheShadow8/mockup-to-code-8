import React from 'react';
import styled from 'styled-components';

import HighLine from './HighLine';
import { black } from '../../utilities';

export default function SectionTitle(props) {
  const { title } = props;

  return (
    <SectionTitleWrapper>
      <h1>{title}</h1>
      <HighLine width="10rem" />
    </SectionTitleWrapper>
  );
}

const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0 0 2rem;
    font-size: 3rem;
    color: ${black};
    text-transform: uppercase;
  }
`;
