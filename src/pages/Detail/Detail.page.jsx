import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { escapeString } from '../../utils/escapeString';
import { formatDate } from '../../utils/formatDate';
import { HomeLink, Detail as DetailWrap, RelatedCardWrapper, RelatedCard, Video, IframeWrapper, Desc, DateSpan, Title } from './styled';
import mock from '../../mockRelatedVideos.json';

function Detail() {
    const location = useLocation();
    const [relatedVideos, setRelatedVideos] = useState(mock.items);
    const { videoId, title, description, publishedAt } = location.state;
    const [video, setVideo] = useState({ videoId, title, description, publishedAt});
    const baseApiUrl = 'https://youtube.googleapis.com/youtube/v3/search';
    
    useEffect(() => {
      const getRelated = async () => {
          let response = await fetch(`${baseApiUrl}?part=snippet&relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`)
  
          if (response.ok) { // if HTTP-status is 200-299
            let json = await response.json();
            setRelatedVideos(json.items);
          } else {
            alert(`"HTTP-Error: " + ${response.status}\nGet Related Videos: Failed\nProbably because API_KEY is not set in your env`);
          }
      };
      getRelated();
    }, [videoId]);

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
                <h3>Related videos</h3>
            {relatedVideos.map((video) => {
              const { title, description, publishedAt } = video.snippet;
              const { videoId } = video.id;
              return (
                <RelatedCard key={video.etag} onClick={() => setVideo({ videoId, title, description, publishedAt})}>
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
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