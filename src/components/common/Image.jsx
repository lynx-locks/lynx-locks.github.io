import React from 'react';

function Image(props) {
  // eslint-disable-next-line react/prop-types
  const { src, width, alt, ...rest } = props;
  return <div style={{display: 'flex', justifyContent: "center", padding: "20px"}}><img width={width} alt={alt} src={`/images/log/${src}`} style={{maxWidth: "80%"}}/></div>;
}

export default Image;
