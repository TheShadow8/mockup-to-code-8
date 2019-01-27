import React from 'react';
import styled from 'styled-components';

import { borderColor, white } from '../utilities';

const CartWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;
const ProductQuantity = styled.div`
  background-color: ${white};
  padding: 0.3rem 0.8rem;
  border: 1px solid ${borderColor};
  border-radius: 200%;
  text-align: center;
  margin-right: 0.5rem;
`;

export default function Cart(props) {
  const { quantity } = props;
  return (
    <CartWrapper>
      <ProductQuantity>{quantity}</ProductQuantity>
      <div>Cart</div>
    </CartWrapper>
  );
}
