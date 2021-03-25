import React, { useState } from 'react';
import { DateSpan, Desc, Detail as DetailWrap, HomeLink, RelatedCard, RelatedCardWrapper, Title, Video } from '../Detail/styled';
import { IframeWrapper } from './styled';
import { escapeString } from '../../utils/escapeString';
import { formatDate } from '../../utils/formatDate';
import { useLocation } from 'react-router';
import { useGlobal } from '../../providers/Global';

function FavDetail() {
    const { state } = useGlobal();
    const { videos } = state;

    const location = useLocation();
    const { videoId, title, description, publishedAt } = location.state;
    const [video, setVideo] = useState({ videoId, title, description, publishedAt});

    return (
        <>
            <HomeLink to="/">← Go home</HomeLink>

            <DetailWrap>
                <Video>
                    <IframeWrapper><iframe data-testid="iframe" title={video.title} width="100%" height="100%" src={`https://www.youtube.com/embed/${video.videoId}`}></iframe></IframeWrapper>
                    <Title>
                        {escapeString(video.title)} <DateSpan>(published on: {formatDate(video.publishedAt)})</DateSpan>
                    </Title>
                    <Desc>{video.description}</Desc>
                </Video>
                <RelatedCardWrapper>
                    <h3>Favorite videos <span role="img" aria-label="hearts">💕</span></h3>
                {videos.slice(10,15).map((video) => {
                const { title, description, publishedAt } = video.snippet;
                const { videoId } = video.id;
                return (
                    <RelatedCard key={video.etag} onClick={() => setVideo({ videoId, title, description, publishedAt})}>
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                        <span>{video.snippet.title}</span>
                    </RelatedCard>)
                }
                )}
                </RelatedCardWrapper>
            </DetailWrap>
        </>
    )
}

export default FavDetail;