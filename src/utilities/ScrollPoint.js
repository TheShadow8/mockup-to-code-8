import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

export default class ScrollPoint extends Component {
  state = {
    display: false
  };

  onScrollPointEnter = () => {
    this.setState({ display: true });
  };

  onScrollPointLeave = () => {
    this.setState({ display: false });
  };

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        display: this.state.display
      });
    });
    return (
      <Waypoint
        onEnter={this.onScrollPointEnter}
        onLeave={this.onScrollPointLeave}
      >
        <div>{children}</div>
      </Waypoint>
    );
  }
}
