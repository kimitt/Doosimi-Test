import React from 'react';
import { Link } from 'react-router-dom';
import buttonImgOne from '../assets/answer-1.png';
import buttonImgTwo from '../assets/answer-2.png';

const Child = () => {
  return (
    <div className="adult-container">
      <div className="adult-button-life">
        <Link to="http://jrcodingschool.kr" target="_blank">
          온라인 코딩 교육 받으러 가기!
          {/*<button // 버튼들 클래스로 처리하기*/}
          {/*  style={{*/}
          {/*    marginTop: '30px',*/}
          {/*    width: '100%',*/}
          {/*    fontSize: '16px',*/}
          {/*    height: '40px',*/}
          {/*    borderRadius: '10px',*/}
          {/*  }}*/}
          {/*></button>*/}
        </Link>
        <img src={buttonImgOne} alt="button" />
      </div>
      <div className="adult-button-oz">
        <Link to="http://www.magicoding.io" target="_blank">
          매력적인 코딩 마법의 세계로 떠나보기!
          {/*<button*/}
          {/*  style={{*/}
          {/*    marginTop: '30px',*/}
          {/*    width: '100%',*/}
          {/*    fontSize: '16px',*/}
          {/*    height: '40px',*/}
          {/*    borderRadius: '10px',*/}
          {/*  }}*/}
          {/*></button>*/}
        </Link>
        <img src={buttonImgTwo} alt="button" />
      </div>
      {/*<div className="adult-button-life">*/}
      {/*  <Link to="https://jrcodingac.kr">*/}
      {/*    최고의 선생님과 코딩 교육을 받으러 가기!*/}
      {/*    /!*<button*!/*/}
      {/*    /!*  style={{*!/*/}
      {/*    /!*    marginTop: '30px',*!/*/}
      {/*    /!*    width: '100%',*!/*/}
      {/*    /!*    fontSize: '16px',*!/*/}
      {/*    /!*    height: '40px',*!/*/}
      {/*    /!*    borderRadius: '10px',*!/*/}
      {/*    /!*  }}*!/*/}
      {/*    /!*></button>*!/*/}
      {/*  </Link>*/}
      {/*  <img src={buttonImgOne} alt="button" />*/}
      {/*</div>*/}
    </div>
  );
};

export default Child;
