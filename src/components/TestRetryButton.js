import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

const TestRetryButton = () => {
  return (
    <div className="test-retry">
      <Link to="/ ">
        <button>전체 유형 보기</button>
      </Link>
      <Link to="/ " style={{ width: '100px' }}>
        <FontAwesomeIcon
          className="icon-box"
          // style={{ color: 'black', padding: '17px 0', paddingLeft: '40px' }}
          style={{ color: 'black' }}
          size="2x"
          icon={faRefresh}
        />
      </Link>
    </div>
  );
};

export default TestRetryButton;
