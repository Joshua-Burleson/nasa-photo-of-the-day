import styled from 'styled-components';
import nasaLoader from './nasaloader.gif';

const APODImageContainer = styled.img`
    background-image: url(${nasaLoader});
    background-position: center;
    background-size: cover;
    min-width: 98%;
    min-height: 250px;
`;

export default APODImageContainer;