import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  return (
    <ul className={styles.flex_container_list}>
      {props.options.map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              className={styles.button_feedback}
              onClick={() => props.onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;
