
import Statistics from "components/Statistics";
import FeedbackOptions from "components/FeedbackOptions";
import Section from "components/Section";
import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handeIncrement = (e) => {
    switch (e) {
      case "good":
        setGood(pref => pref + 1)
        break;
      case "neutral":
        setNeutral(pref => pref + 1)
        break;
      case "bad":
        setBad(pref => pref + 1)
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil(good / countTotalFeedback() * 100) ? Math.ceil(good / countTotalFeedback() * 100) : 0
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={["Good", "Neutral", "Bad"]} handeIncrement={handeIncrement} />
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
      </Section>
    </div>
  );
};

export default App;