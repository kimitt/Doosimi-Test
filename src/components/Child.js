import React from 'react';
import { Link } from 'react-router-dom';

const Child = () => {
  return (
    <div
      style={{
        width: '400px',
        margin: '0 auto',
      }}
    >
      <div>
        <Link to="http://jrcodingschool.kr">
          <button // 버튼들 클래스로 처리하기
            style={{
              marginTop: '30px',
              width: '100%',
              fontSize: '16px',
              height: '40px',
              borderRadius: '10px',
            }}
          >
            카이스트 교육 방식 그대로의 온라인 코딩 교육 받으러 가기!
          </button>
        </Link>
      </div>
      <div>
        <Link to="http://www.magicoding.io">
          <button
            style={{
              marginTop: '30px',
              width: '100%',
              fontSize: '16px',
              height: '40px',
              borderRadius: '10px',
            }}
          >
            매력적인 코딩 마법의 세계로 떠나보기!
          </button>
        </Link>
      </div>
      <div>
        <Link to="https://jrcodingac.kr">
          <button
            style={{
              marginTop: '30px',
              width: '100%',
              fontSize: '16px',
              height: '40px',
              borderRadius: '10px',
            }}
          >
            최고의 선생님과 코딩 교육을 받으러 가기!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Child;
