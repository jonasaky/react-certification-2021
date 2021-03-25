import React, { useState } from 'react';
import { DateSpan, Desc, Detail as DetailWrap, HomeLink, RelatedCard, RelatedCardWrapper, Title, Video } from '../Detail/styled';
import { IframeWrapper } from './styled';
import { escapeString } from '../../utils/escapeString';
import { formatDate } from '../../utils/formatDate';
import { useLocation } from 'react-router';
import { useGlobal } from '../../providers/Global';

function FavDetail() {
    const { state } = useGlobal();
    const { favoritesVid } = state;

    const location = useLocation();
    const { videoId, title, description, publishedAt, thumbnail } = location.state;
    const [video, setVideo] = useState({ videoId, title, description, publishedAt, thumbnail });

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
                {favoritesVid.slice(10,15).map((video) => {
                return (
                    <RelatedCard key={video.videoId} onClick={() => setVideo({ videoId, title, description, publishedAt, thumbnail })}>
                        <img src={video.thumbnail} alt={video.title}/>
                        <span>{video.title}</span>
                    </RelatedCard>)
                }
                )}
                </RelatedCardWrapper>
            </DetailWrap>
        </>
    )
}

export default FavDetail;