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
  };

  return (
    <SectionsContainer {...options}>
      <div className="result">
        <Section>
          <ResultScore resultType={maxData} />
          <ResultTypeImgPart resultType={maxData}></ResultTypeImgPart>
        </Section>
        <Section>
          <ResultType resultType={maxData} />
        </Section>
        <Section>
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
