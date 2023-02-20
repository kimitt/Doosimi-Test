import React from 'react';
import r1Img from '../assets/result-1.png';
import r2Img from '../assets/result-2.png';
import r3Img from '../assets/result-3.png';

const ResultTypeImgPart = ({ resultType }) => {
  const resultMsg = {
    0: {
      title: '데이터 분석에 능한 개발자',
    },
    1: {
      title: '협업을 즐기는 창의적인 개발자',
    },
    2: {
      title: '연구지향적이며 리더십도 지닌 개발자 ',
    },
  };

  let num = 0;
  let resultImg;

  // test
  resultType = 'a';

  switch (resultType) {
    case 'a':
      num = 0;
      resultImg = r1Img;
      break;
    case 'b':
      num = 1;
      resultImg = r2Img;
      break;
    case 'c':
      num = 2;
      resultImg = r3Img;
      break;
    default:
      break;
  }
  // test
  // num = 0;

  let title = resultMsg[num].title;

  return (
    <div className="result-type">
      <div className="result-img">
        <h3 className="title">{title}</h3>
      </div>

      <div>
        <img className="result-type-img" src={resultImg} alt="resultImg" />
      </div>
    </div>
  );
};

export default ResultTypeImgPart;
