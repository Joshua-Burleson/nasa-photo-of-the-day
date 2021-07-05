import React, {useEffect} from 'react';
import './App.css';

function Image(props){
    return(
        <img class="apod-img" src={props.hdurl} ></img>
    )
}


export default Image;