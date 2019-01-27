import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import FeatureCard from '../components/FeatureCard';

export default function Feature() {
  return (
    <FeatureWrapper>
      <Container flex>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </Container>
    </FeatureWrapper>
  );
}

const FeatureWrapper = styled.div`
  margin: 12rem 0;
`;
