import React, { Component } from 'react';

import GlobalStyled from './GlobalStyle';
import Hero from './Layouts/Hero';
import Navbar from './Layouts/Navbar';
import PopularProduct from './Layouts/PopularProduct';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyled />
        <Navbar />
        <Hero />
        <PopularProduct />
      </div>
    );
  }
}

export default App;
