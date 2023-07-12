import React, { useState } from "react";

import Sections from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/Feedback";
import Statistics from "../Statistics/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickIncrement = (evt) => {
    const feadbackType = evt.target.textContent;
    if (feadbackType === "Good") {
      return setGood(good + 1);
    } else if (feadbackType === "Neutral") {
      return setNeutral(neutral + 1);
    } else if (feadbackType === "Bad") {
      return setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return Math.ceil((good * 100) / countTotalFeedback());
  };

  return (
    <Sections title="Please leave feadback">
      <FeedbackOptions onClickIncrement={onClickIncrement}></FeedbackOptions>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedback()}
      ></Statistics>
    </Sections>
  );
}

export { App };
