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
    const { children } = this.props;

    const togglePoint = (
      <Waypoint
        onEnter={this.onScrollPointEnter}
        onLeave={this.onScrollPointLeave}
      />
    );

    return children({
      display: this.state.display,
      togglePoint: togglePoint
    });
  }
}
