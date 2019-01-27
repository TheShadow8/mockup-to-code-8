import React from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';

import Icon from '../components/elements/Icon';
import { black, textColor } from '../utilities';

export default function ProductCard() {
  return (
    <CardWrapper>
      <img alt="" src="img/p-1.jpg" />
      <div>Product title</div>
      <Rating
        initialRating={4.5}
        readonly
        emptySymbol={<Icon name="star-empty" />}
        fullSymbol={<Icon name="star-full" />}
      />

      <div>
        $195.50 <small>$250.00</small>
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${black};

  & > :last-child {
    font-size: 2rem;
    font-weight: 700;
    small {
      color: ${textColor};
      font-size: 1.2rem;
      font-weight: normal;
      text-decoration: line-through;
    }
  }

  & > *:not(:first-child) {
    margin-top: 2rem;
  }
`;
