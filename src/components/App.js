import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export default class Feedback extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleUpdate = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, amount) => total + amount);
  };

  countPositiveFeedbackPercentage = (total, posValues) => {
    return total === 0 ? 0 : Math.round((posValues / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const posPerc = this.countPositiveFeedbackPercentage(total, good);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good: 'good', neutral: 'neutral', bad: 'bad' }}
            onLeaveFeedback={this.handleUpdate}
          />
        </Section>
        <Section title="Statistics">
          <Notification message="No feedback given" total={total} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            posPerc={posPerc}
          />
        </Section>
      </>
    );
  }
}
