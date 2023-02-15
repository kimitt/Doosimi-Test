import React from 'react';
import { AnimatedCircle } from './AnimatiedCircle.styles';

const ResultScore = ({ resultType }) => {
  const scoreList = [95, 91, 87];
  let scoreResult;

  switch (resultType) {
    case 'a':
      scoreResult = scoreList[0];
      break;
    case 'b':
      scoreResult = scoreList[2];
      break;
    case 'c':
      scoreResult = scoreList[1];
      break;
  }

  let calcScoreResult = scoreResult / 100;

  return (
    <div>
      <div
        style={{
          marginTop: '100px',
          paddingTop: '10px',
          paddingBottom: '30px',
          // border: '10px solid beige',
          // borderRadius: '5px',
        }}
      >
        <h1
          style={{
            marginBottom: '30px',
            fontWeight: '800',
          }}
        >
          나의 개발자 적합도는?
        </h1>
        <div>
          <div
            style={{
              width: '100px',
              height: '100px',
              position: 'relative',
            }}
          >
            <svg
              viewBox="0 0 200 200"
              style={{ position: 'absolute', left: '200px' }}
            >
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
                stroke="black"
                strokeWidth="20"
                strokeDasharray={`${2 * Math.PI * 90 * calcScoreResult} ${
                  2 * Math.PI * 90 * (1 - calcScoreResult)
                }`}
                strokeDashoffset={2 * Math.PI * 90 * (1 - calcScoreResult)}
              />
            </svg>
            <div
              style={{
                position: 'absolute',
                top: '38px',
                left: '230px',
                zIndex: '-2',
                width: '50px',
                fontSize: '20px',
                fontWeight: '700',
              }}
            >
              {scoreResult} %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultScore;
