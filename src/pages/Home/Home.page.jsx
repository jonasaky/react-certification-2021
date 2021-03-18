import React, { useRef, useState } from 'react';
import mock from '../../mock.json';
import VideoCard from '../../components/VideoCard';
import { HomePage as Home, HomeTitle, WrapperVideos } from './styled';
import NavBar from '../../components/NavBar';

function HomePage() {
  const sectionRef = useRef(null);
  const [videos, setVideos] = useState(mock.items.slice(0,24));

  return (
    <>
    <NavBar onVideosChanged={setVideos}/>
    <Home ref={sectionRef}>
        <>
          <HomeTitle>Welcome to YouTube videoclips!</HomeTitle>
          <WrapperVideos>
            {videos.map((video) => 
              <VideoCard 
              key={video.etag}
              videoId={video.id.videoId} 
              thumbnail={video.snippet.thumbnails.medium.url} 
              title={video.snippet.title}
              description={video.snippet.description}
              publishedAt={video.snippet.publishedAt} 
              />)}
          </WrapperVideos>
        </>
    </Home>
    </>
  );
}

export default HomePage;
