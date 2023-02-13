import React from 'react';

const RandomScore = () => {
  // random 인수 구하는 method
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  let resultRandom = getRandom(1, 4);

  const scoreList = [95, 91, 87];
  let result = scoreList[resultRandom - 1];
  // let calcResult = result / 100;
  // 원에서 사용하는 변수

  return (
    <div>
      <div>start resultRandom</div>
      <div>{resultRandom}</div>
      <div>result</div>
      <div>{result}</div>
    </div>
  );
};

export default RandomScore;
