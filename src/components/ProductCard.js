import React from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';

import Icon from '../components/elements/Icon';
import Image from '../components/elements/Image';
import { black, textColor } from '../utilities';

export default function ProductCard(props) {
  return (
    <CardWrapper>
      <Image height="100" width="150" imgUrl="img/p-1.jpg" />
      <div>{props.title}</div>
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
  align-items: center;
  color: ${black};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

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

  &:hover {
    transform: translateY(-1.5rem) scale(1.05);
  }
`;
