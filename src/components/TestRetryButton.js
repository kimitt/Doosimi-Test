import React from 'react';
import { Link } from 'react-router-dom';

const TestRetryButton = () => {
  return (
    <div className="test-retry">
      <Link to="/ ">
        <button>테스트 다시하기</button>
      </Link>
    </div>
  );
};

export default TestRetryButton;
