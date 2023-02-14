import React from 'react';
import '../scss/Home.scss';
import mainImg from '../assets/main_img.png';
import buttonImg from '../assets/main_button.png';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="home-container">
        <div className="main-img">
          <img src={mainImg} alt="mainImage" />
        </div>
        <div className="team-info">
          <NavLink to={'/team'}>팀원소개</NavLink>
        </div>
        <div className="button-img">
          <NavLink to={'/quiz'}>
            <img src={buttonImg} alt="buttonImage" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
