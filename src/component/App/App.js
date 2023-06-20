import React from "react";

import Sections from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/Feedback";
import Statistics from "../Statistics/Statistics";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onClickIncrement = (evt) => {
    // console.log(evt.target);
    this.setState((prevState) => {
      const feadbackType = evt.target.textContent;
      if (feadbackType === "Good") {
        return { good: (prevState.good += 1) };
      } else if (feadbackType === "Neutral") {
        return { neutral: (prevState.neutral += 1) };
      } else if (feadbackType === "Bad") {
        return { bad: (prevState.bad += 1) };
      }
    });
  };

  countTotalFeedback() {
    const values = Object.values(this.state);
    let summ = 0;
    for (const item of values) {
      summ += item;
    }
    return summ;
  }

  countPositiveFeedback() {
    return Math.ceil((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Sections title="Please leave feadback">
        <FeedbackOptions
          options={this.state}
          onClickIncrement={this.onClickIncrement}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedback()}
        ></Statistics>
      </Sections>
    );
  }
}

export { App };
