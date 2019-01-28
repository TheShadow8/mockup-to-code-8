import React, { Component } from 'react';
import styled from 'styled-components';

import { ScrollPoint } from '../utilities';
import SectionTitle from '../components/elements/SectionTitle';
import Button from '../components/elements/Button';
import ProductCardList from '../components/ProductCardList';

export default class PopularProduct extends Component {
  render() {
    const items = [
      {
        id: 1,
        title: 'Product 1'
      },
      {
        id: 2,
        title: 'Product 2'
      },
      {
        id: 3,
        title: 'Product 3'
      },
      {
        id: 4,
        title: 'Product 4'
      }
    ];

    return (
      <PopularProductWrapper>
        <SectionTitle title="Popular products" />
        <ScrollPoint>
          <ProductCardList items={items} />
        </ScrollPoint>
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
