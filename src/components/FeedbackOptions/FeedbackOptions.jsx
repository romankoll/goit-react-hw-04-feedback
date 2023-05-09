import React from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({
  options,
  onLeaveFeedback,
  //   onIncrementGood,
  //   onIncrementNeutral,
  //   onIncrementBad,
}) => {
  return (
    <ul className={css.feedbackList}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.statBtn}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
