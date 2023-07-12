import Notification from "../Notifivation/Notification";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  console.log("eerr", positivePercentage);
  return total === 0 ? (
    <Notification message={"There is no feedback"}></Notification>
  ) : (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

export default Statistics;
