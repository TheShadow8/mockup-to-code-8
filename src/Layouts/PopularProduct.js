import React, { Component } from 'react';
import styled from 'styled-components';

import Container from './Container';
import FeatureCard from '../components/FeatureCard';

export default class PopularProduct extends Component {
  render() {
    return (
      <PopularProductWrapper>
        <Container flex>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </Container>
      </PopularProductWrapper>
    );
  }
}

const PopularProductWrapper = styled.div`
  display: flex;
  margin: 10rem 0;
`;
