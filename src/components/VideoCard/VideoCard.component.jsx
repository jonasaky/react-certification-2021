import React from 'react';
import { useHistory } from 'react-router';
import { escapeString } from '../../utils/escapeString';
import { formatDate } from '../../utils/formatDate';
import { VideoCard as Video, VideoImgWrapper, Img, VideoTitle, VideoDate } from './styled';

const VideoCard = (props) => {
    const history = useHistory();
    const { thumbnail, videoId, title, description, publishedAt, route } = props;

    function goToDetail() {
        const pathname = route || '/detail';
        history.push({
            pathname: pathname, 
            state: {
                videoId,
                title,
                description,
                publishedAt,
                thumbnail,
            },
        });
    }

    return (
        <Video onClick={() => goToDetail()}>
            <VideoImgWrapper>
                <Img src={thumbnail} />
            </VideoImgWrapper>
            <VideoTitle>{escapeString(title)}<VideoDate>({formatDate(publishedAt)})</VideoDate></VideoTitle>
        </Video>
    )
}

export default VideoCard;