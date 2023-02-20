import React from 'react';
// import { AnimatedCircle } from './AnimatiedCircle.styles';

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
    default:
      break;
  }

  // let calcScoreResult = scoreResult / 100;

  return (
    <div>
      <div
        style={{
          paddingTop: '10px',
          // border: '10px solid beige',
          // borderRadius: '5px',
        }}
      >
        <h1
          style={{
            marginBottom: '30px',
            fontWeight: '800',
            fontSize: '2rem',
          }}
        >
          나의 개발자 적합도는?
          <span
            style={{
              fontWeight: '800',
              fontSize: '4rem',
              color: 'orange',
            }}
          >
            {scoreResult} 90
          </span>
          <span
            style={{
              fontSize: '3rem',
              color: 'orange',
            }}
          >
            %
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ResultScore;
