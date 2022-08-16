import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onleaveGoodFeedback,
  onleaveNeutralFeedback,
  onleaveBadFeedback,
}) => {
  return (
    <ul className={css.option_list}>
      <li className={css.list_item}>
        <button
          className={css.item_btn}
          type="button"
          name="Good"
          onClick={() => {
            onleaveGoodFeedback();
          }}
        >
          Good
        </button>
      </li>
      <li className={css.list_item}>
        <button
          className={css.item_btn}
          type="button"
          name="Neutral"
          onClick={() => {
            onleaveNeutralFeedback();
          }}
        >
          Neutral
        </button>
      </li>
      <li className={css.list_item}>
        <button
          className={css.item_btn}
          type="button"
          name="Bad"
          onClick={() => {
            onleaveBadFeedback();
          }}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
