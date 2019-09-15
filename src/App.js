import React, {useState} from "react";
import ApiDataSection from './ApiDataSection.js';
import styled from 'styled-components';
import HeadText from './styles/HeadText.js';
import "./App.css";

function App() {
  const [date, setDate] = useState(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`);

  const changeDate = (event) => {
    setDate(event.target.value);
  }
  
  return (
    <div className="App">
      <HeadText>Astronomy Photo Of The Day: {date}</HeadText>
      <ApiDataSection date = {date} />
      <form>
        <h3>Pick Another Date</h3>
        <input id="date-picker" name="newDate" type="date" onChange = { (e) => setDate(e.target.value) }></input>
      </form>
    </div>
  );
}

export default App;


//Next: test <DateForm onChangeEvent = {changeDate} /> in place of current form