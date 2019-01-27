import React, { Component } from 'react';
import styled from 'styled-components';

import SectionTitle from '../components/elements/SectionTitle';
import ProductCard from '../components/ProductCard';
import Button from '../components/elements/Button';

export default class PopularProduct extends Component {
  render() {
    return (
      <PopularProductWrapper>
        <SectionTitle title="Popular products" />
        <ProductCardWrapper>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductCardWrapper>
        <Button>Explore more</Button>
      </PopularProductWrapper>
    );
  }
}

const PopularProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 0;
  & > :not(:last-child) {
    margin-bottom: 10rem;
  }
`;

const ProductCardWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: 5rem;
  }
`;
