import React, {useState} from "react";
import ApiDataSection from './ApiDataSection.js';
import DateForm from './DateForm.js';
import NASALogo from './NasaLogo.js';
import Navbar from './Navbar.js';
import HeadText from './styles/HeadText.js';
import "./App.css";

function App() {
  const [date, setDate] = useState(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`);

  const changeDate = (event) => {
    setDate(event.target.value);
  }
  
  return (
    <div className="App">
      <Navbar />
      <NASALogo />
      <HeadText>Astronomy Photo Of The Day: {date}</HeadText>
      <ApiDataSection date = {date} />
      <DateForm onChangeEvent = {changeDate} />
    </div>
  );
}

export default App;