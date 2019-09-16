import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DataDiv from './styles/DataDiv.js';
import APODIframe from './styles/APODIframe.js';
import APODImageContainer from './styles/APODImageContainer.js'
import APODParagraph from './styles/APODParagraph.js';

function FetchApod(date){
    const [mediaSrc, setMediaSrc] = useState(date);
  
    useEffect(() => {
      const fetchData = (date) => {
        axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
             .then(result => {
               return setMediaSrc({media_type: result.data.media_type, src: result.media_type === 'image' ? result.data.hdurl : result.data.url, description: result.data.explanation});
              })
              .catch(err => {
                console.log(JSON.stringify(err));
              });
      }
      fetchData(date);
    }, [date])
    return mediaSrc;
  }
  
  
  function ApiDataSection(props){
    const apiData = FetchApod(props.date);
    return(
      <DataDiv>
        {apiData.media_type === "image" ? <APODImageContainer id = "POD" src = {apiData.src} alt = "NASA POD"></APODImageContainer>
                                        : <APODIframe title = 'APOD_vid' src = {apiData.src}></APODIframe>}
        <APODParagraph>{apiData.description}</APODParagraph>
      </DataDiv>
    )
  }

  export default ApiDataSection;