import React from 'react';
import '../scss/Team.scss';
import kimiImg from '../assets/logo.png';
function TeamPage() {
  return (
    <div className="team-container">
      <div className="team-box">
        <div className="team-title">
          <h2>5팀을 소개합니다!</h2>
        </div>
        <div className="team-info-box">
          <div className="team-info">
            <img src={kimiImg} alt="kimi" />
            <p style={{ fontSize: '1.5rem' }}>kimi</p>
            <p>백엔드도 디자인도 재미있는</p>
            <p>프론트 개발자</p>
            <a href="https://github.com/kimitt" target="_blank">
              github 바로가기
            </a>
          </div>
          <div>
            <div>
              {' '}
              <div className="team-info">
                <img src={kimiImg} alt="kimi" />
                <p style={{ fontSize: '1.5rem' }}>kimi</p>
                <p>백엔드도 디자인도 재미있는</p>
                <p>프론트 개발자</p>
                <a href="https://github.com/kimitt" target="_blank">
                  github 바로가기
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              {' '}
              <div className="team-info">
                <img src={kimiImg} alt="kimi" />
                <p style={{ fontSize: '1.5rem' }}>kimi</p>
                <p>백엔드도 디자인도 재미있는</p>
                <p>프론트 개발자</p>
                <a href="https://github.com/kimitt" target="_blank">
                  github 바로가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
