import React from 'react';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback: {positivePercentage ? positivePercentage : '0'}%
        </li>
      </ul>
    </div>
  );
};

export default Statistic;
