import React from 'react';
import PropTypes from 'prop-types';

function LocalVid({ id }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <video width="420" height="315" controls>
        <source src={`/videos/log/${id}`} type="video/mp4" />
        <track kind="captions" />
      </video>
    </div>
  );
}

LocalVid.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LocalVid;
