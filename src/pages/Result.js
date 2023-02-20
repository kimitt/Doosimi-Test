import React from 'react';
import ResultScore from '../components/ResultScore';
import Child from '../components/Child';
import Adult from '../components/Adult';
import ResultType from '../components/ResultType';
import ResultShare from '../components/ResultShare';
import TestRetryButton from '../components/TestRetryButton';
import '../scss/Result.scss';
import '../components/kakaoLink';
import { SectionsContainer, Section } from 'react-fullpage';
import ResultTypeImgPart from '../components/ResultTypeImgPart';

function Result({ maxData, age }) {
  let ageChecker = true; // 성인 경우 true

  if (age === 'F') {
    ageChecker = false;
  }

  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    arrowNavigation: true,
    navigation: false,
  };
  function downBtn() {
    console.log('hi');
  }

  return (
    <SectionsContainer {...options}>
      <div className="result">
        <Section>
          <ResultTypeImgPart resultType={maxData} />
          <ResultScore resultType={maxData} />
          <a className="scrollDown" href="">
            <span></span>
          </a>
        </Section>
        <Section>
          <ResultType resultType={maxData} />
          <div className="margin-scroll"></div>
          <a className="scrollDown" href="">
            <span></span>
          </a>
        </Section>
        <Section>
          <div className="adult-child-mt"></div>
          {ageChecker ? <Adult /> : <Child />}
          {/*<Child />*/}
          <ResultShare />
          <TestRetryButton />
        </Section>
      </div>
    </SectionsContainer>
  );
}

export default Result;
