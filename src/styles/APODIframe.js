import styled from 'styled-components';
import nasaLoader from './nasaloader.gif'

const APODIframe = styled.iframe`
    background-image: url(${nasaLoader});
    background-position: center;
    background-size: cover;
    min-width: 95%;
    min-height: 250px;
    border: none;
`;

export default APODIframe;