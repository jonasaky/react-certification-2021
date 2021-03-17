import React from 'react';
import { useHistory } from 'react-router';
import { escapeString } from '../../utils/escapeString';
import { VideoCard as Video, VideoImgWrapper, Img, VideoTitle } from './styled';

const VideoCard = (props) => {
    const history = useHistory();
    const { thumbnail, videoId, title, description, publishedAt } = props;

    function goToDetail() {
        history.push({
            pathname: '/detail', 
            state: {
                videoId,
                title,
                description,
                publishedAt,
            },
        });
    }

    return (
        <Video onClick={() => goToDetail()}>
            <VideoImgWrapper>
                <Img src={thumbnail} />
            </VideoImgWrapper>
            <VideoTitle>{escapeString(title)}</VideoTitle>
        </Video>
    )
}

export default VideoCard;