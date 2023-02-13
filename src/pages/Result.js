import React from 'react';
import ResultScore from '../components/ResultScore';

function Result() {
  let resultAge = 1;
  let resultType = 'A';

  return (
    <div>
      <ResultScore resultType={resultType} />
    </div>
  );
}

export default Result;
