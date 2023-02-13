import React from 'react';
import { AnimatedCircle } from './AnimatiedCircle.styles';

const ResultScore = ({ resultType }) => {
  const scoreList = [95, 91, 87];
  let scoreResult;

  switch (resultType) {
    case 'A':
      scoreResult = scoreList[0];
      break;
    case 'B':
      scoreResult = scoreList[2];
      break;
    case 'C':
      scoreResult = scoreList[1];
      break;
  }

  let calcScoreResult = scoreResult / 100;

  return (
    <div>
      <div>start resultRandom</div>
      <div>{scoreResult}</div>
      <div style={{ marginTop: '50px', marginLeft: '50px' }}>
        <div style={{ width: '50px', height: '50px' }}>
          <svg viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="beige"
              strokeWidth="20"
            />
            <AnimatedCircle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="red"
              strokeWidth="20"
              strokeDasharray={`${2 * Math.PI * 90 * calcScoreResult} ${
                2 * Math.PI * 90 * (1 - calcScoreResult)
              }`}
              strokeDashoffset={2 * Math.PI * 90 * (1 - calcScoreResult)}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ResultScore;
