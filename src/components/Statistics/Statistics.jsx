import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <span className={css.statValue}>Good: {good}</span>
    <span className={css.statValue}>Neutral: {neutral} </span>
    <span className={css.statValue}>Bad: {bad}</span>
    <span className={css.statValue}>Total: {total}</span>
    <span className={css.statValue}>
      Positive feedback: {positivePercentage}%
    </span>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
