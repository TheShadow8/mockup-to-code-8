import React from 'react';
import styled from 'styled-components';

import HighLine from '../components/elements/HighLine';
import { black } from '../utilities';

export default function FeatureCard() {
  return (
    <CardWrapper>
      <h1>01</h1>
      <h4>24/7 Customer care</h4>
      <HighLine width="4rem" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus
        eros sed sem egestas fermentum.
      </p>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    font-size: 5rem;
    color: ${black};
  }

  h4 {
    color: ${black};
  }

  & > *:not(:first-child) {
    margin-top: 2rem;
  }
`;
