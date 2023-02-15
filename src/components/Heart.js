import React from 'react';
import '../scss/Quiz.scss';
const Heart = ({ index, count }) => {
  return (
    <>
      <img
        className="heart"
        src={
          index <= count
            ? 'https://ifh.cc/g/5odbNO.png'
            : 'https://ifh.cc/g/kWZTGo.png'
        }
      />
    </>
  );
};

export default Heart;
//https://ifh.cc/g/5odbNO.png 하트잇는거
//https://ifh.cc/g/kWZTGo.png 하트없는거
