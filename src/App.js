import React, { useState } from "react";
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Section } from "./components/Section/Section";
import { Notification } from "./components/Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = (e) => {
    const { name } = e.currentTarget;
    if (name === "good") {
      setGood((good) => good + 1);
    }
    if (name === "neutral") {
      setNeutral((neutral) => neutral + 1);
    }
    if (name === "bad") {
      setBad((bad) => bad + 1);
    }
  };

  const countTotalFeedback = () => { return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : ((good * 100) / total).toFixed(0);
  };

const total = countTotalFeedback();
const positivePercentage = countPositiveFeedbackPercentage();


  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );



}