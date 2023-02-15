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
  // T : 있음 / F : 없음
  let ageChecker = true;

  console.log(maxData);
  console.log(age);

  if (age === 'F') {
    ageChecker = false;
  }

  return (
    <div className="result">
      <ResultScore resultType={maxData} />
      <ResultType resultType={maxData} />
      {ageChecker ? <Adult /> : <Child />}
      <ResultShare />
      <TestRetryButton />
    </div>
  );
}

export default Result;
