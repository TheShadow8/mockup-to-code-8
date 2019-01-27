import React, { Component } from 'react';

import GlobalStyled from './GlobalStyle';
import Hero from './Layouts/Hero';
import Navbar from './Layouts/Navbar';
import PopularProduct from './Layouts/PopularProduct';
import Feature from './Layouts/Feature';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyled />
        <Navbar />
        <Hero />
        <Feature />
        <PopularProduct />
      </div>
    );
  }
}

export default App;
