import React from 'react';
import '../scss/Team.scss';
import kimiImg from '../assets/kimi.jpg';
import sbImg from '../assets/sn.jpg';
import ytImg from '../assets/yt.jpg';

function TeamPage() {
  return (
    <div className="team-container">
      <div className="team-box">
        <div className="team-title">
          <h2>5팀을 소개합니다</h2>
          <p>본 심리테스트는 오즈코딩스쿨</p>
          <p>
            <strong>
              린스타트업 맞춤형 Serverless MVP 개발 전문가 양성 과정 1기
            </strong>
          </p>
          <p>5팀이 구현한 결과물 입니다.</p>
        </div>
        <div className="team-info-box">
          <div className="team-info">
            <img src={kimiImg} alt="kimi" />
            <p className="team-name">kimi</p>
            <p>백엔드도 디자인도 재미있는</p>
            <p>프론트 개발자</p>
            <a href="https://github.com/kimitt" target="_blank">
              github 바로가기
            </a>
          </div>
          <div className="team-info">
            <img src={sbImg} alt="subin" />
            <p className="team-name">subbny</p>
            <p>코딩이 즐거운 프론트개발자</p>
            <a href="https://github.com/blairMoon" target="_blank">
              github 바로가기
            </a>
          </div>
          <div className="team-info">
            <img src={ytImg} alt="yoontae" />
            <p className="team-name">윤태</p>
            <p>리액트부터 aws까지 다루고 싶은</p>
            <p>백엔드 개발자</p>
            <a href="https://github.com/yesaroun" target="_blank">
              github 바로가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
