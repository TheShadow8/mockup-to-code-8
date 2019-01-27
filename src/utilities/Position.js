export const fixed = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => `
  position: fixed;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;

export const absolute = ({
  x = 0,
  y = 0,
  yProp = 'top',
  xProp = 'left'
} = {}) => `
  position: absolute;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;
