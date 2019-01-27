import React, { Component } from 'react';

export default class Icon extends Component {
  static defaultProps = {
    color: 'black'
  };

  render() {
    switch (this.props.name) {
      case 'logo':
        return (
          <svg
            width="68"
            height="51"
            viewBox="0 0 68 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M4.5 43.5L18 3.75L30 29.25L46.5 3.75L63 43.5"
                stroke={this.props.color}
                strokeWidth="3"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0.434761"
                y="0.748987"
                width="66.6043"
                height="49.1823"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        );

      case 'close':
        return (
          <svg
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 31.11 31.11"
            enableBackground="new 0 0 31.11 31.11"
          >
            <polygon
              fill={this.props.color}
              points="31.11,1.41 29.7,0 15.56,14.14 1.41,0 0,1.41 14.14,15.56 0,29.7 1.41,31.11 15.56,16.97   29.7,31.11 31.11,29.7 16.97,15.56 "
            />
          </svg>
        );

      case 'search':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="20"
            viewBox="0 0 38.875 41"
          >
            <g
              className="nc-icon-wrapper"
              stroke="none"
              fill={this.props.color}
            >
              <defs />
              <path
                id="Search"
                className="cls-1"
                d="M119.41 1195.41l-9.262-9.29a17.19 17.19 0 1 0-2.31 1.95l9.446 9.48a1.508 1.508 0 1 0 2.126-2.14zm-35.4-21.31a14.035 14.035 0 1 1 14.035 14.08 14.055 14.055 0 0 1-14.035-14.08z"
                transform="translate(-81 -1157)"
                // style="fill-rule: evenodd;"
              />
            </g>
          </svg>
        );
      default:
        return null;
    }
  }
}
