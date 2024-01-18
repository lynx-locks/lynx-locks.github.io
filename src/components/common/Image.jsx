import React from 'react';

function Image(props) {
  // eslint-disable-next-line react/prop-types
  const { src, width, alt, ...rest } = props;
  return <img width={width} alt={alt} src={`/images/log/${src}`} />;
}

export default Image;
