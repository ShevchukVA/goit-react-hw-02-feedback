import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, total }) => (
  <>{total === 0 && <h2>{message}</h2>}</>
);

Notification.defaultProps = {
  total: 0,
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number,
};
export default Notification;
