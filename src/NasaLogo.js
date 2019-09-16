import React from 'react';
import TopLogo from './styles/TopLogo.js';
import NASASpinner from './styles/nasaspinner.gif';

function NASALogo(){
    return(
        <TopLogo><img src = {NASASpinner} alt = 'NASA Logo'></img></TopLogo>
    )
};

export default NASALogo