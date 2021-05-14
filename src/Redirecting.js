import React from 'react';
import PropTypes from 'prop-types';

const Redirecting = ({ error, description }) => (
  <div>
    <h2>{error}</h2>
    <h4>{description}</h4>
  </div>
);

Redirecting.propTypes = {
  error: PropTypes.number,
  description: PropTypes.string,
};

export default Redirecting;
