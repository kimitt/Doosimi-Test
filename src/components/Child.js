import React from 'react';
import { Link } from 'react-router-dom';

const Child = () => {
  return (
    <div>
      <Link to="https://jrcodingac.kr">jr 코딩 영재원</Link>
      <Link to="http://jrcodingschool.kr">jr 코딩 영재스쿨</Link>
      <Link to="http://www.magicoding.io">코딩 마법 학교</Link>
    </div>
  );
};

export default Child;
