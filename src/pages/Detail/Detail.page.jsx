import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { escapeString } from '../../utils/escapeString';
import { formatDate } from '../../utils/formatDate';
import { HomeLink, Detail as DetailWrap, RelatedCardWrapper, RelatedCard, Video, IframeWrapper, Desc, DateSpan, Title, FavButton } from './styled';
import { API_BASE_URL } from '../../utils/constants';
import { useFetch } from '../../utils/hooks/useFetch';
import { useGlobal } from '../../providers/Global';

function Detail() {
    const { state, dispatch } = useGlobal();
    const { relatedVid, favoritesVid, isAuthenticated } = state;
    const location = useLocation();
    const { videoId, title, description, publishedAt, thumbnail } = location.state;
    const [video, setVideo] = useState({ videoId, title, description, publishedAt, thumbnail, isFavorite: favoritesVid.filter(v => v.videoId === videoId).length > 0 });
    const url = `${API_BASE_URL}?part=snippet&relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`;
    useFetch(url, 'updateRelated');

    function handleFavButtonClick() {
        if (video.isFavorite) {
            dispatch({ type: 'removeFromFavorites', payload: video });
        } else {
            dispatch({ type: 'addToFavorites', payload: video });
        }
        setVideo({ ...video, isFavorite: !video.isFavorite });
    }

    return (
        <>
        <HomeLink to="/">← Go home</HomeLink>
        <DetailWrap>
            <Video>
                <IframeWrapper><iframe data-testid="iframe" title={video.title} width="100%" height="100%" src={`https://www.youtube.com/embed/${video.videoId}`}></iframe></IframeWrapper>
                {isAuthenticated && <FavButton type="button" value={video.isFavorite ? 'remove from favs' : 'add to favs'} onClick={handleFavButtonClick}/>}
                <Title>
                    {escapeString(video.title)} <DateSpan>(published on: {formatDate(video.publishedAt)})</DateSpan>
                </Title>
                <Desc>{video.description}</Desc>
            </Video>
            <RelatedCardWrapper>
                <h3>Related videos</h3>
            {relatedVid.map((video) => {
              const { title, description, publishedAt } = video.snippet;
              const thumbnail = video.snippet.thumbnails.medium.url;
              const { videoId } = video.id;
              return (
                <RelatedCard key={video.etag} onClick={() => setVideo({ videoId, title, description, publishedAt, thumbnail, isFavorite: favoritesVid.filter(v => v.videoId === videoId).length > 0 })}>
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                    <span>{video.snippet.title}</span>
                </RelatedCard>)
              }
              )}
            </RelatedCardWrapper>
        </DetailWrap>
        </>
    );
}

export default Detail;