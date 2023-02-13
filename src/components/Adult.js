import React from 'react';
import { Link } from 'react-router-dom';

const Adult = () => {
  return (
    <div
      style={{
        width: '400px',
        margin: '0 auto',
      }}
    >
      <div>
        <Link to="https://lifehacking.co.kr">
          <button // 버튼들 클래스로 처리하기
            style={{
              marginTop: '30px',
              width: '100%',
              fontSize: '16px',
              height: '40px',
              borderRadius: '10px',
            }}
          >
            개발로 창업을 하고 싶다면?
          </button>
        </Link>
      </div>
      <div>
        <Link to="https://ozcodingschool.com">
          <button
            style={{
              marginTop: '30px',
              width: '100%',
              fontSize: '16px',
              height: '40px',
              borderRadius: '10px',
            }}
          >
            스타트업 개발자로 성장하고 싶다면?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Adult;
