import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <span className="statValue">Good: {good}</span>
    <span className="statValue">Neutral: {neutral} </span>
    <span className="statValue">Bad: {bad}</span>
    <span className="statValue">Total: {total}</span>
    <span className="statValue">Positive feedback: {positivePercentage}%</span>
  </div>
);

export default Statistics;
