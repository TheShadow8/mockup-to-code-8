import React, { Component } from 'react';
import styled from 'styled-components';
import { Trail } from 'react-spring';
import ProductCard from './ProductCard';

export default class ProductCardList extends Component {
  state = {
    display: this.props.display
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.display !== nextProps.display)
      this.setState({ display: nextProps.display });
  }
  render() {
    const products = this.state.display ? (
      <Trail
        items={this.props.items}
        keys={item => item.id}
        from={{ transform: 'translate3d(-30rem, -1rem, 0)' }}
        to={{ transform: 'translate3d(0,0,0)' }}
        config={{
          duration: 800,
          delay: 100,
          tension: 120,
          friction: 14,
          easing: t => t * (2 - t)
        }}
      >
        {item => props => (
          <div style={props}>
            <ProductCard title={item.title} />
          </div>
        )}
      </Trail>
    ) : null;

    return <ProductCardListWrapper>{products}</ProductCardListWrapper>;
  }
}

const ProductCardListWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 22.2rem;
  & > :not(:first-child) {
    margin-left: 2rem;
  }
`;
