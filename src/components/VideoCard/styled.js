import styled from 'styled-components';

const VideoCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    padding: 0 10px;
`;

const VideoImg = styled.img`
    width: 200px;
`;

const VideoTitle = styled.p`
    background-color: rgba(0, 122, 122, 0.23);
    z-index: 1;
    height: 180px;
`;

const Styled = { VideoCard, VideoImg, VideoTitle };
export default Styled;