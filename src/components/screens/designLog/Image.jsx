import React from 'react';

function Image(props) {
  const { src, width, alt, ...rest } = props;
  return <img width={width} alt={alt} src={`/images/designLog/${src}`} />;
}

export default Image;
