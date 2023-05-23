import React, { useState } from 'react';
// import { Component } from 'react';

import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section ';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(3);
  const [bad, setBad] = useState(2);

  const handleIncrement = ({ target: { name } }) => {
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
          options={[' good ', 'neutral', 'bad']}
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

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// handleIncrement = feedback => {
//   this.setState(prevState => ({
//     [feedback]: prevState[feedback] + 1,
//   }));
// };

// handleIncrementGood = () => {
//   // console.log(event.target);
//   this.setState(prevState => {
//     return {
//       good: prevState.good + 1,
//     };
//   });
//   // console.log(this);
// };
// handleIncrementNeutral = () => {
//   this.setState(prevState => {
//     return {
//       neutral: prevState.neutral + 1,
//     };
//   });
// };
// handleIncrementBad = () => {
//   this.setState(prevState => {
//     return {
//       bad: prevState.bad + 1,
//     };
//   });
// };

// countTotalFeedback = () => {
//   return this.state.good + this.state.neutral + this.state.bad;
// };

// countPositiveFeedbackPercentage = () => {
//   const totalFeedback = this.countTotalFeedback();
//   if (totalFeedback === 0) {
//     return 0;
//   }
//   return Math.round((this.state.good / totalFeedback) * 100);
// };

//   render() {
//     const optionsBtn = Object.keys(this.state);
//     return (
// <div>
//   <Section title="Please leave feedback">
//     <FeedbackOptions
//       options={optionsBtn}
//       onLeaveFeedback={this.handleIncrement}
//     />
//   </Section>
//   {this.countTotalFeedback() !== 0 ? (
//     <Section title="Statistics">
//       <Statistics
//         good={this.state.good}
//         neutral={this.state.neutral}
//         bad={this.state.bad}
//         total={this.countTotalFeedback()}
//         positivePercentage={this.countPositiveFeedbackPercentage()}
//       />
//     </Section>
//   ) : (
//     <Notification message="here is no feedback" />
//   )}
// </div>
//     );
//   }
// }

// export default App;
