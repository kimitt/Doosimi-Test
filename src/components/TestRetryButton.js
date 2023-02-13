import React from 'react';
import { Link } from 'react-router-dom';

const TestRetryButton = () => {
  return (
    <div
      style={{
        width: '400px',
        margin: '0 auto',
      }}
    >
      <Link to="/ ">
        <button
          style={{
            marginTop: '30px',
            width: '100%',
            fontSize: '16px',
            height: '40px',
            borderRadius: '10px',
          }}
        >
          테스트 다시하기
        </button>
      </Link>
    </div>
  );
};

export default TestRetryButton;
