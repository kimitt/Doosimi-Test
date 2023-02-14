import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { dbFirestore } from '../fbase';
import '../scss/Quiz.scss';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Quiz({ getData }) {
  const [quiz, setquiz] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const pickArrays = [];

  const [a, seta] = useState([]);
  const [b, setb] = useState([]);
  const [c, setc] = useState([]);
  const [age, setage] = useState('');

  const pickArray = [a, b, c];
  // const [pickArray, setPickArray] = useState([]);
  // //데이터 받아오기
  useEffect(() => {
    if (a.length + b.length + c.length === 9) {
      navigate('/result');
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
  const handleSubmit = (e) => {
    pickArray.map((i, index) => {
      pickArrays.push(pickArray[index].length);

      if (Math.max(...pickArrays) === pickArrays[0]) {
        getData('a', age);
      } else if (Math.max(...pickArrays) === pickArrays[1]) {
        getData('b', age);
      } else if (Math.max(...pickArrays) === pickArrays[2]) {
        getData('c', age);
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

  return (
    <>
      {quiz.map((i, index) => {
        if (count === index) {
          return (
            <>
              <div className="whole-container">
                <div className="title-container">
                  <p className="quiz-title">질문:{i.title}</p>
                </div>
                <div className="answer-container" style={{ display: 'block' }}>
                  <div className="fist-answer-container">
                    <input
                      onChange={(e) => {
                        putValue1(index, e.target.value);
                      }}
                      value="주민등록증있음"
                      type="radio"
                      name="answer"
                      id="1"
                    />
                    <label for="1">{i.first_answer}</label>
                  </div>
                  <div className="second-answer-container">
                    <input
                      onChange={(e) => {
                        putValue2(index, e.target.value);
                      }}
                      value="주민등록증 없음"
                      type="radio"
                      name="answer"
                      id="2"
                    />
                    <label for="2">{i.second_answer}</label>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </>
  );
}

export default Quiz;
