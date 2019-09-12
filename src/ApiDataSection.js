import React, {useState, useEffect} from 'react';
import axios from 'axios';

function FetchApod(date){
    const [imgSrc, setImgSrc] = useState(date);
  
    useEffect(() => {
      const fetchData = (date) => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
             .then(result => {
               return setImgSrc({img: result.data.hdurl, description: result.data.explanation});
              })
              .catch(err => {
                console.log(JSON.stringify(err));
              });
      }
      fetchData(date);
    }, [date])
    return imgSrc;
  }
  
  
  function ApiDataSection(props){
    const apiData = FetchApod(props.date);
    return(
      <div className = "NASA-data">
        <img id = "POD" src = {apiData.img} alt = "NASA POD"></img>
        <p>{apiData.description}</p>
      </div>
    )
  }

  export default ApiDataSection;