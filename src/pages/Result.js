import React from 'react';
import ResultScore from '../components/ResultScore';
import Child from '../components/Child';
import Adult from '../components/Adult';
import ResultType from '../components/ResultType';
import ResultShare from '../components/ResultShare';
import TestRetryButton from '../components/TestRetryButton';
import '../scss/Result.scss';
import '../components/kakaoLink';

function Result({ maxData, age }) {
  let resultAge = 1;
  let ageChecker = true; // 유아(0)인 경우 true
  let resultType = 'A';
  if (resultAge !== 0) {
    ageChecker = false;
  }

  return (
    <div
      style={{
        width: '500px',
        margin: '0 auto',
        textAlign: 'center',
        fontFamily: 'HSYuji-Regular',
      }}
    >
      <div>{maxData}</div>
      <div>{age}</div>
      <ResultScore resultType={resultType} />
      <ResultType resultType={resultType} />
      {ageChecker ? <Child /> : <Adult />}
      <ResultShare />
      <TestRetryButton />
    </div>
  );
}

export default Result;
