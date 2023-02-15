import { collection, onSnapshot, query } from 'firebase/firestore';

import React, { useEffect, useState } from 'react';

import { dbFirestore } from '../fbase';
import '../scss/Quiz.scss';
import { useNavigate } from 'react-router-dom';
import Heart from '../components/Heart';
import { async } from '@firebase/util';

function Quiz({ getData }) {
  const [quiz, setquiz] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const pickArrays = [];

  const [a, seta] = useState([]);
  const [b, setb] = useState([]);
  const [c, setc] = useState([]);
  const [age, setage] = useState('');
  const [heart, setheart] = useState(0);
  const pickArray = [b, c, a];
  const [progress, setProgress] = useState([]);
  // const [pickArray, setPickArray] = useState([]);
  // //데이터 받아오기
  useEffect(() => {
    if (a.length + b.length + c.length === 9) {
      navigate('/loading');
    }
  }, [c, a, b]);

  useEffect(() => {
    const q = query(collection(dbFirestore, 'quiz'));

    onSnapshot(q, (snapshot) => {
      const quizArr = snapshot.docs.map((document) => ({
        ...document.data(),
        id: document.id,
      }));

      setquiz(quizArr);
    });
  }, []);
  // useEffect(() => {
  //   console.log(pickArray);

  //   // if (pickArray.length === 9) {
  //   //   navigate('/result');
  //   // }
  // }, [pickArray]);
  // //length를 배열에 담고, maxLength 선정해서 App.js로 보내주기
  useEffect(() => {
    setProgress((hello) => [0, ...hello]);
  }, [count]);
  const handleSubmit = (e) => {
    pickArray.map((i, index) => {
      pickArrays.push(pickArray[index].length);

      if (Math.max(...pickArrays) === pickArrays[0]) {
        getData('b', age);
      } else if (Math.max(...pickArrays) === pickArrays[1]) {
        getData('c', age);
      } else if (Math.max(...pickArrays) === pickArrays[2]) {
        getData('a', age);
      }
    });
  };
  // 객체에서 value값 반환하는 함수
  const getKeyByValue = (obj, value) => {
    return Object.keys(obj).find((key) => obj[key] === value);
  };
  // // 선택지마다 각자 배열에 담아주기
  const putValue1 = (index, value) => {
    setCount(count + 1);
    setheart(heart + 10);
    // putProgress();
    if (index === 0) {
      setage(value);
    } else if (getKeyByValue(quiz[index], 'BC') !== undefined) {
      setb((count) => [value, ...count]);
    } else if (getKeyByValue(quiz[index], 'AB') !== undefined) {
      seta((count) => [value, ...count]);
    } else if (getKeyByValue(quiz[index], 'AC') !== undefined) {
      seta((count) => [value, ...count]);
    }
    if (index === quiz.length - 1) {
      handleSubmit();
    }
  };
  const putValue2 = (index, value) => {
    setCount(count + 1);
    // putProgress();
    if (index === 0) {
      setage(value);
    } else if (getKeyByValue(quiz[index], 'BC') !== undefined) {
      setc((count) => [value, ...count]);
    } else if (getKeyByValue(quiz[index], 'AB') !== undefined) {
      setb((count) => [value, ...count]);
    } else if (getKeyByValue(quiz[index], 'AC') !== undefined) {
      setc((count) => [value, ...count]);
    }
    if (index === quiz.length - 1) {
      handleSubmit();
      // navigate('/result');
    }
  };

  // const putProgress = () => {
  //   const array = [...progress];
  //   array.push(0);
  //   setProgress(array);
  // };

  return (
    <>
      {quiz.map((i, index) => {
        if (count === index) {
          return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <div className="high-div">
              <div className="whole-container">
                <div className="title-container">
                  <div className="real-container">
                    <p className="quiz-title">{i.title}</p>
                  </div>
                </div>
                <div className="heart-up-container">
                  <div className="heart-container">
                    {quiz.map((_, index) => (
                      <Heart index={index} count={count} />
                    ))}
                  </div>
                </div>
                <div className="answer-container" style={{ display: 'block' }}>
                  <div
                    className="input-container"
                    onClick={(e) => {
                      putValue1(index, 'T');
                    }}
                  >
                    <div className="label-container">
                      <input
                        className="answer"
                        value="주민등록증있음"
                        type="radio"
                        name="answer"
                        id="1"
                      />
                      <label for="1">{i.first_answer}</label>
                    </div>
                  </div>
                  <div
                    className="input-container"
                    style={{ marginTop: '0px' }}
                    onClick={(e) => putValue2(index, 'F')}
                  >
                    <div className="label-container">
                      <input
                        className="answer"
                        // onChange={(e) => {
                        //   putValue2(index, e.target.value);
                        // }}
                        // value="주민등록증 없음"
                        type="radio"
                        name="answer"
                        id="2"
                      />
                      <label for="2">{i.second_answer}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default Quiz;
