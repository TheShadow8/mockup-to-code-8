import React, { Component } from 'react';
import styled from 'styled-components';

import { bgHeroColor, black } from '../utilities';
import Button from '../components/elements/Button';
import Image from '../components/elements/Image';

export default class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <HeroImageWrapper>
          <Image width="450" imgUrl="img/hero.jpg" />
        </HeroImageWrapper>

        <HeroContentWrapper>
          <HeroContent>
            <h4>TRENDING COLLECTION</h4>
            <h1>BRAND WATCH</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rhoncus eros sed sem egestas fermentum. Nullam cursus vehicula
              arcu, sed rutrum ante finibus eu. Praesent a quam sem. Donec sed
              vestibulum ligula. Mauris in tempor turpis. Aenean vel nisl
              mattis, consectetur sapien non, efficitur risus.
            </p>
            <div>
              Price: <span>$220</span>
            </div>
            <Button width="20rem">SHOP NOW</Button>
          </HeroContent>
        </HeroContentWrapper>
      </HeroWrapper>
    );
  }
}

const HeroWrapper = styled.div`
  height: 75rem;
  background-color: ${bgHeroColor};
  display: flex;
`;

const HeroImageWrapper = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: flex-end;

  & > * {
    margin-right: 5rem;
  }
`;

const HeroContentWrapper = styled.div`
  flex: 0 1 50%;
  display: flex;
`;

const HeroContent = styled.div`
  flex: 0 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 5rem;
    color: ${black};
  }

  h4 {
    color: ${black};
    letter-spacing: 2px;
  }

  span {
    font-size: 2.5rem;
    font-weight: 600;
    color: ${black};
    margin-left: 1.5rem;
  }

  & > :not(:last-child) {
    margin-bottom: 3rem;
  }
`;
