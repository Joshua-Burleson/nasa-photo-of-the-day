import styled from 'styled-components';
import nasaLoader from './nasaloader.gif';

const APODImageContainer = styled.img`
    background-image: url(${nasaLoader});
    background-position: center;
    background-size: cover;
    min-width: 98%;
    min-height: 250px;
    max-height: 50vh;
    max-width: 100%;
    margin: 1%;
    border-radius: 10px;
`;

export default APODImageContainer;