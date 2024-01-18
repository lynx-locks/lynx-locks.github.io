import React from 'react';
import PropTypes from 'prop-types';

function YouTube({ id }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
        width="420"
        height="315"
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}

YouTube.propTypes = {
  id: PropTypes.string.isRequired,
};

export default YouTube;
