import React from 'react';
import r1Img from '../assets/result-1.png';
import r2Img from '../assets/result-2.png';
import r3Img from '../assets/result-3.png';
import ResultType from '../components/ResultType';
import '../scss/Result.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

function All() {
  const typeNum = ['a', 'b', 'c'];

  return (
    <div className="result">
      {typeNum.map((num) => (
        <>
          <ResultType key={num} resultType={num} />
          <div style={{ height: '100px', marginBottom: '30px' }}>&nbsp;</div>
        </>
      ))}
      <div className="test-retry">
        <Link to="/ ">
          <button>테스트 다시하기</button>
        </Link>
      </div>
    </div>
  );
}

export default All;
