import React from 'react';
import ResultScore from '../components/ResultScore';
import Child from '../components/Child';
import Adult from '../components/Adult';

function Result() {
  let resultAge = 0;
  let ageChecker = true; // 유아(0)인 경우 true
  let resultType = 'A';
  if (resultAge !== 0) {
    ageChecker = false;
  }

  return (
    <div style={{ width: '500px', margin: '0 auto', textAlign: 'center' }}>
      <ResultScore resultType={resultType} />
      {ageChecker ? <Child /> : <Adult />}
    </div>
  );
}

export default Result;
