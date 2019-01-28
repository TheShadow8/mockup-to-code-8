import React, { Component } from 'react';
import styled from 'styled-components';
import { Trail } from 'react-spring';
import Waypoint from 'react-waypoint';

import SectionTitle from '../components/elements/SectionTitle';
import ProductCard from '../components/ProductCard';
import Button from '../components/elements/Button';

export default class PopularProduct extends Component {
  state = {
    display: false
  };

  handleWaypointEnter = () => {
    this.setState({ display: true });
  };

  handleWaypointLeave = () => {
    this.setState({ display: false });
  };

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

    const products = this.state.display ? (
      <Trail
        items={items}
        keys={item => item.id}
        from={{ transform: 'translate3d(-10rem, -8rem, 0)' }}
        to={{ transform: 'translate3d(0,0,0)' }}
        config={{ duration: 800, delay: 100 }}
      >
        {item => props => (
          <div style={props}>
            <ProductCard title={item.title} />
          </div>
        )}
      </Trail>
    ) : null;
    return (
      <PopularProductWrapper>
        <SectionTitle title="Popular products" />
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
          <div>
            <ProductCardWrapper>{products}</ProductCardWrapper>
          </div>
        </Waypoint>

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
    margin-left: 2rem;
  }
`;
