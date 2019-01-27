import styled from 'styled-components';

import { black, borderColor, textColor } from '../utilities';

import Container from './Container';
import Cart from '../components/Cart';
import Icon from '../components/elements/Icon';

import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <Container>
          <SubNav>
            <div>Customer Support: +1 555 6666</div>
            <SubNavRight>
              <Cart quantity="6" />
              <div>My Account</div>
              <Icon name="search" />
            </SubNavRight>
          </SubNav>
        </Container>
        <BreakLine />
        <Container>
          <MainNav>
            <Icon name="logo" color={textColor} />
            <MainNavRight>
              <div className="active">Home</div>
              <div>About</div>
              <div>Brand</div>
              <div>Blog</div>
              <div>Contact</div>
            </MainNavRight>
          </MainNav>
        </Container>
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.div`
  width: 100%;
  height: 15rem;
  color: ${black};
`;

const MainNav = styled.div`
  height: 10rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${textColor};
`;

const MainNavRight = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;

  .active {
    color: ${black};
    margin-top: 0.6rem;

    ::after {
      display: table;
      margin-top: 0.5rem;
      content: '';
      height: 2px;
      background-color: ${black};
      width: 100%;
    }
  }

  & > * {
    margin-left: 2rem;
  }
`;

const SubNav = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubNavRight = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 2rem;
  }

  & > *:nth-child(2) {
    padding: 0 2rem;
    border-left: 1.5px solid ${borderColor};
    border-right: 1.5px solid ${borderColor};
  }
`;

const BreakLine = styled.div`
  height: 1px;
  width: 96vw;
  background-color: ${borderColor};
`;
