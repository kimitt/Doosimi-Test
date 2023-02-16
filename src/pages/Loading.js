import React from 'react';
import '../scss/Quiz.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Loading = () => {
  // const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // setLoading(false);
      navigate('/result');
    }, 3000);
  }, []);
  // useEffect(() => {

  // }, [loading]);
  return (
    <>
      {
        <div className="loading-container">
          <img className="loading" src="https://ifh.cc/g/d83cHn.gif" />
        </div>
      }
    </>
  );
};

export default Loading;
