import React, {useState} from "react";
import ApiDataSection from './ApiDataSection.js';
import "./App.css";

function App() {
  const [date, setDate] = useState(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`);
  
  return (
    <div className="App">
      <h1>Astronomy Photo Of The Day: {date}</h1>
      <ApiDataSection date = {date} />
      <form>
        <h3>Pick Another Date</h3>
        <input id="date-picker" name="newDate" type="date" onChange = { (e) => setDate(e.target.value) }></input>
      </form>
    </div>
  );
}

export default App;
