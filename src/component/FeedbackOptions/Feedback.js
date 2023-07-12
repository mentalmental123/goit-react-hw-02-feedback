import css from "./feedback.module.css";

function FeedbackOptions({ onClickIncrement }) {
  return (
    <div className={css["feedback-buttons"]}>
      <button onClick={onClickIncrement} className={css["feedback-button"]}>
        Good
      </button>
      <button onClick={onClickIncrement} className={css["feedback-button"]}>
        Neutral
      </button>
      <button onClick={onClickIncrement} className={css["feedback-button"]}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackOptions;
