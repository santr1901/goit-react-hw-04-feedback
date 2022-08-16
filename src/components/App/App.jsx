import React, { useState } from 'react';

import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/Feedbackoptions/FeedbackOptions ';
import Notification from 'components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveGoodFeedback = () => {
    setGood(prevState => prevState + 1);
  };
  const leaveNeutralFeedback = optionName => {
    setNeutral(prevState => prevState + 1);
  };
  const leaveBadFeedback = optionName => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good * 100) / countTotalFeedback
  );
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onleaveGoodFeedback={leaveGoodFeedback}
          onleaveNeutralFeedback={leaveNeutralFeedback}
          onleaveBadFeedback={leaveBadFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leaveFeedback = optionName => {
//     this.setState(prevState => ({
//       [optionName]: prevState[optionName] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = good + neutral + bad;
//     const countPositiveFeedbackPercentage = Math.round(
//       (good * 100) / countTotalFeedback
//     );

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.leaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {countTotalFeedback > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback}
//               positivePercentage={countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default App;
