import React from 'react';

const FeedbackOptions = ({
  options,
  onLeaveFeedback,
  //   onIncrementGood,
  //   onIncrementNeutral,
  //   onIncrementBad,
}) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button
            className="statBtn"
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
