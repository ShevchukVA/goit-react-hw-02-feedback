import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const ButtonControls = ({ options, onLeaveFeedback }) => (
  <div>
    <button
      type="button"
      onClick={() => {
        onLeaveFeedback(options.good);
      }}
      className={styles.button}
    >
      Good
    </button>
    <button
      type="button"
      onClick={() => {
        onLeaveFeedback(options.neutral);
      }}
      className={styles.button}
    >
      Neutral
    </button>
    <button
      type="button"
      onClick={() => {
        onLeaveFeedback(options.bad);
      }}
      className={styles.button}
    >
      Bad
    </button>
  </div>
);

ButtonControls.propTypes = {
  options: PropTypes.objectOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default ButtonControls;
