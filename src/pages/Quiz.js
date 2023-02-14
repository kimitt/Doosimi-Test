import { collection, onSnapshot, query } from 'firebase/firestore';
<<<<<<< Updated upstream
import React, { useEffect, useRef, useState } from 'react';
import { dbFirestore } from '../fbase';

import { useNavigate } from 'react-router-dom';

import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Quiz({ getData }) {
  const [quiz, setquiz] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const pickArrays = [];

  const [a, seta] = useState([]);
  const [b, setb] = useState([]);
  const [c, setc] = useState([]);
  const [age, setage] = useState('');
  const [bar, setbar] = useState(10);
  const pickArray = [a, b, c];
  // const [pickArray, setPickArray] = useState([]);
  // //데이터 받아오기
  useEffect(() => {
    console.log('c', c);
    console.log('a', a);
    console.log('b', b);
    if (a.length + b.length + c.length === 9) {
      navigate('/result');
    }
  }, [c, a, b]);
=======
import React, { useEffect, useState } from 'react';
import { dbFirestore } from '../fbase';

function Quiz() {
  const [quiz, setQuiz] = useState([]);
>>>>>>> Stashed changes

  useEffect(() => {
    const q = query(collection(dbFirestore, 'quiz'));

    onSnapshot(q, (snapshot) => {
      const quizArr = snapshot.docs.map((document) => ({
        ...document.data(),
        id: document.id,
      }));

<<<<<<< Updated upstream
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
      console.log('age1:', age);

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
      console.log('1');
    } else if (getKeyByValue(quiz[index], 'AB') !== undefined) {
      seta((count) => [value, ...count]);
    } else if (getKeyByValue(quiz[index], 'AC') !== undefined) {
      seta((count) => [value, ...count]);
    }
    if (index === quiz.length - 1) {
      console.log(pickArray);
      console.log('2');
      handleSubmit();
    }
  };
  const putValue2 = (index, value) => {
    setCount(count + 1);

    if (index === 0) {
      setage(value);
    } else if (getKeyByValue(quiz[index], 'BC') !== undefined) {
      console.log('1');
      setc((count) => [value, ...count]);
    } else if (getKeyByValue(quiz[index], 'AB') !== undefined) {
      setb((count) => [value, ...count]);
    } else if (getKeyByValue(quiz[index], 'AC') !== undefined) {
      setc((count) => [value, ...count]);
    }
    if (index === quiz.length - 1) {
      handleSubmit();
      // navigate('/result');
      console.log('2');
      console.log(pickArray);
    }
    // setTimeout(() => {
    //   console.log(a);
    //   console.log(b);
    //   console.log(c);
    //   setPickArray([a, b, c]);
    //   console.log('pickArray', pickArray);
    // }, 3000);

    // if (index === quiz.length - 1) {
    //   handleSubmit();
    //   console.log(a);
    //   console.log(b);
    //   console.log(c);
    //   setPickArray([a, b, c]);

    //   // setTimeout(() => {
    //   //   console.log('pickArray', pickArray);
    //   // }, 3000);
    //   // navigate('/result');
    // }
  };

  return (
    <>
      {quiz.map((i, index) => {
        if (count === index) {
          return (
            <>
              <ProgressBar now={bar} style={{ color: 'black' }} />
              <div>질문:{i.title}</div>
              <div style={{ display: 'block' }}>
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
            </>
          );
        }
      })}
    </>
  );
=======
      console.log(quizArr);
      setQuiz(quizArr);
    });
  }, []);

  return <div>Quizedfdf</div>;
>>>>>>> Stashed changes
}

export default Quiz;
