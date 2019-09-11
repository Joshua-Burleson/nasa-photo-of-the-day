import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";


function fetchAPOD(date = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`){
  [imageData, setImageData] = useState('');
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/${date}&api_key=DEMO-KEY`)
         .then(result => {
            setImageData(result.json())
          });
  },[data]);
  return imageData;
}



function App() {
  const {apiData, setApiData} = useState(fetchAPOD(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`));
  return (
    <div className="App">
      <img src={apiData}></img>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <button onClick = {() => setApiData(fetchAPOD(`10-31-2018`))}>load</button>
    </div>
  );
}

export default App;
