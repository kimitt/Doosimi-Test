import React from 'react';
import { Link } from 'react-router-dom';
import buttonImgOne from '../assets/answer-1.png';
import buttonImgTwo from '../assets/answer-2.png';

const Adult = () => {
  return (
    <div className="adult-container">
      <div className="adult-button-life">
        <Link to="https://lifehacking.co.kr">
          {/* 버튼들 클래스로 처리하기 */}
          개발로 창업을 하고 싶다면?
        </Link>
        <img src={buttonImgOne} alt="button" />
      </div>
      <div className="adult-button-oz">
        <Link to="https://ozcodingschool.com">
          스타트업 개발자로 성장하고 싶다면?
        </Link>
        <img src={buttonImgTwo} alt="button" />
      </div>
    </div>
  );
};

export default Adult;
