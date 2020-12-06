import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text }) => {
  const stars = [...Array(5).keys()].map((i) => {
    let classNames = 'far fa-star';

    if (value >= i + 1) {
      classNames = 'fas fa-star';
    } else if (value >= i + 0.5) {
      classNames = 'fas fa-star-half-alt';
    }

    return (
      <span key={i}>
        <i className={classNames} style={{ color: '#f1c40f' }} />
      </span>
    );
  });

  return (
    <div className='my-2'>
      <span>{stars}</span>
      <span className='ml-2'>{text && text}</span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Rating;
