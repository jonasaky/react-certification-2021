import React from 'react';
import { VideoCard as Video, VideoImg, VideoTitle } from './styled';

const VideoCard = (props) => {
    return (
        <Video>
            <VideoImg src={props.thumbnail} />
            <VideoTitle>{props.title}</VideoTitle>
        </Video>
    )
}

export default VideoCard;