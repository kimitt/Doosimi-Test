import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import TeamPage from './pages/TeamPage';
import All from './pages/All';
import { useState } from 'react';
import Loading from './pages/Loading';
function App() {
  const [datas, setdatas] = useState();
  const [maxData, setMaxData] = useState('');
  const [age, setAge] = useState('');
  // useEffect(() => {
  //   // console.log(datas);
  //   console.log("datas", datas);
  // }, [datas]);
  const [data, setData] = useState('');
  const getData = (max, helloage) => {
    console.log('age:', helloage);
    setMaxData(max);
    setAge(helloage);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/quiz" element={<Quiz getData={getData} />} />
        <Route
          path="/result"
          element={<Result maxData={maxData} age={age} />}
        />
        <Route path="/loading" element={<Loading />} />
        <Route path="/all" element={<All />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
