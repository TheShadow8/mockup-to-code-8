import React from 'react';
import styled from 'styled-components';

export default function Image(props) {
  const { imgUrl, height, width } = props;

  return (
    <ImageWrapper height={height} width={width}>
      <img alt="" src={imgUrl} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;

  ${props => {
    return ` height: ${props.height}px;
             width: ${props.width}px;
    `;
  }}

  img {
    height: 100%;
    width: 100%;
  }
`;
