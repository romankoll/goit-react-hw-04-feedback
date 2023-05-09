import React from 'react';
import css from './Statistics.module.css';

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

export default Statistics;
