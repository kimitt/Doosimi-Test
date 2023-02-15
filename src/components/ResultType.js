import React from 'react';
import r1Img from '../assets/result-1.png';
import r2Img from '../assets/result-2.png';
import r3Img from '../assets/result-3.png';
import titleImg from '../assets/result-title.png';

const ResultType = ({ resultType }) => {
  const resultMsg = {
    0: {
      title: 'HW와 SW를 모두 아우르며 데이터 분석에 능한 개발자',
      content:
        '현실적이고 신중하며 성실한 성격을 가진 당신!!\n\n' +
        '정해진 원칙과 계획에 따라\n 분명하고, 체계적으로 일하기를 좋아하는군요.\n\n' +
        '그래서 기계를 조작하거나, \n계산적인 능력을 발휘하는데 흥미가 있겠네요!',
    },
    1: {
      title: '원활한 협업을 이끌면서 창의적인 생각을 지닌 개발자',
      content:
        '창조적이고 변화를 선호하면서도 타인에 대한 이해심이 많은 당신!!\n\n' +
        '새로운 아이디어를 생각하고\n 타인을 위한 사회적 서비스를 제공하는 일을 좋아하는군요.\n\n' +
        '그래서 사무적이고 기계적인 업무보다는 혁신적이고\n 대인 지향적인 업무에 흥미가 있겠네요!',
    },
    2: {
      title: '연구지향적이며 리더십 또한 지닌 개발자 ',
      content:
        '분석적이고 학구적이면서도 모험적이며 야심이 있는 당신!!\n\n' +
        '당신과 비슷한 성향을 보인 개발자는 지식의 개발과 습득을\n 좋아하면서도 진취적이고 목표 지향적인 일을 좋아하는군요. \n\n' +
        '그래서 탐구적이고 분석적인 사고를 통해 기존에 없던 기술을\n 개발하는 업무에 흥미가 있으며 열정적인 성향으로\n 팀 내 성과를 발휘하겠네요!',
    },
  };
  const resultDevType = {
    0: {
      content:
        '새로운 기계, 기술 트랜드를 공부하는 성향은\n 반도체, 로봇, 네트워크, 임베디드 개발 직무에 관심도가 크기에\n' +
        '클라우드 개발자, 임베디드 개발자, 서버 개발자로 일하고 있어요!!!\n\n' +
        '또한 계산적인 능력을 바탕으로\n자료를 수집, 기록, 분석에 관심이 크기에\n' +
        '데이터 분석가, 데이터 과학자, 빅데이터 전문가로 일하고 있어요!!',
    },
    1: {
      content:
        '혁신적이고 창의적인 성향은 기획, UX/UI, 프론트엔드 등과 같이\n 디자인, 심미안적인 개발 직무에 관심도가 크기에\n' +
        'UI/UX개발자, 프론트엔드 개발자로 일하고 있어요!!\n\n' +
        '또한 타인에 대한 이해심이 많은 성향은 배려와 소통을 통해\n 팀에 긍정적인 역할을 하고 소비자 중심의 사고를 하기에\n' +
        'IT 기업의 PM(Product Manager)으로 일하고 있어요!!',
    },
    2: {
      content:
        '전문성과 깊이 있는 연구를 추구하는 성향은 새로운 개술을\n 개발해 내거나 문제를 해결하는 개발 직무에 관심이 크기에\n' +
        '인공지능 개발자, 백엔드 개발자로 일하고 있어요!!\n\n' +
        '또한 진취적이고 열정적인 성향은 팀의 목표와 방향성을 제시하고\n 자신의 역할을 능동적으로 실행하기에\n' +
        '프로젝트 매니징에 관심이 많고,\n PM(Product Manager)으로 일하고 있어요!!',
    },
  };

  let num = 0;
  let resultImg;

  // test
  resultType = 'c';

  switch (resultType) {
    case 'a':
      num = 0;
      resultImg = r1Img;
      break;
    case 'b':
      num = 1;
      resultImg = r2Img;
      break;
    case 'c':
      num = 2;
      resultImg = r3Img;
      break;
  }
  // test
  // num = 2;

  let title = resultMsg[num].title;
  let content = resultMsg[num].content;
  let devType = resultDevType[num].content;

  return (
    <div className="result-type">
      <div className="result-img">
        <h3 className="title">{title}</h3>
      </div>

      <div>
        <img className="result-type-img" src={resultImg} alt="resultImg" />
      </div>
      <div>
        <h1 className="sub-title">내 성향은?</h1>
        <div className="result-box">
          <div className="result-detail">
            {content.split('\n').map((line) => {
              return <p className="result-detail-text">{line}</p>;
            })}
          </div>
        </div>
      </div>
      <div>
        <h1 className="sub-title">나와 비슷한 성향의 개발자는?</h1>
        <div className="result-box">
          <div className="result-detail">
            {devType.split('\n').map((line) => {
              return <p className="result-detail-text">{line}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultType;
