import React from 'react';
import PropTypes from 'prop-types';

function Images(props) {
  // eslint-disable-next-line react/prop-types
  const { srcs, width, alt, ...rest } = props;
  return <div style={{display: "flex", justifyContent: 'space-evenly'}}>
		{srcs.map((src) => 
			<img width={width} alt={alt} src={`/images/log/${src}`} />
		)}
	</div>;
}

Images.propTypes = {
	srcs: PropTypes.arrayOf.isRequired,
};

export default Images;
