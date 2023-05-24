import React, { useState } from 'react';
// import { Component } from 'react';

import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section ';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = name => {
    if (name === 'good') setGood(state => state + 1);
    if (name === 'neutral') setNeutral(state => state + 1);
    if (name === 'bad') setBad(state => state + 1);
  };

  // const handleIncrement = feedback => {
  //   this.setState(prevState => ({
  //     [feedback]: prevState[feedback] + 1,
  //   }));
  // };

  // const handleIncrementGood = () => {
  //   setGood(prev => prev + 1);
  // };

  // const handleIncrementNeutral = () => {
  //   setNeutral(prev => prev + 1);
  // };
  // const handleIncrementBad = () => {
  //   setBad(prev => prev + 1);
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      {countTotalFeedback() !== 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="here is no feedback" />
      )}
    </div>
  );
};

export default App;
