import React from 'react';
import PropTypes from 'prop-types';

const PostImages = ({ images }) => {
  return (
    <div>
      <div>
        <img
          role="presentation"
          style={{ width: '50%' }}
          src={`http://localhost:8000/${images[0].src}`}
          alt={images[0].src}
        />
      </div>
    </div>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
