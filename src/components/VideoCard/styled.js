import styled from 'styled-components';

export const VideoCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 300px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 4px 4px 8px lightgray;
    cursor: pointer;
`;

export const VideoImgWrapper = styled.div`
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
`;

export const Img = styled.img`
    width: 100%;
`;

export const VideoTitle = styled.p`
    background-color: #363e48;
    color: #c9d1d9;
    padding-left: 8px;
    height: 80px;
    margin: 0;
    text-align: left;
    border-radius: 0 0 8px 8px;
`;
