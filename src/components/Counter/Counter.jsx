import React from 'react';
import '../Counter/Counter.css';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    // console.log(event.target);
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    // console.log(this);
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((this.state.good / totalFeedback) * 100);
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>

        <button
          className="statBtn"
          type="button"
          onClick={this.handleIncrementGood}
        >
          Good
        </button>
        <button
          className="statBtn"
          type="button"
          onClick={this.handleIncrementNeutral}
        >
          Neutral
        </button>
        <button
          className="statBtn"
          type="button "
          onClick={this.handleIncrementBad}
        >
          Bad
        </button>

        <h2> Statistics</h2>
        <span className="statValue">Good: {this.state.good}</span>
        <span className="statValue">Neutral: {this.state.neutral} </span>
        <span className="statValue">Bad: {this.state.bad}</span>
        <span className="statValue">Total: {this.countTotalFeedback()}</span>
        <span className="statValue">
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </span>
      </div>
    );
  }
}

export default Counter;
