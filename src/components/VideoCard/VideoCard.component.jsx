import React from 'react';
import Styled from './styled';

const VideoCard = (props) => {

    return (
        <Styled.VideoCard>
            <Styled.VideoImg src={props.thumbnail} />
            <Styled.VideoTitle>{props.title}</Styled.VideoTitle>
        </Styled.VideoCard>
    )
}

export default VideoCard;