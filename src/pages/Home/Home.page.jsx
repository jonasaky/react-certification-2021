import React, { useRef } from 'react';
import VideoCard from '../../components/VideoCard';
import { HomePage as Home, HomeTitle, WrapperVideos } from './styled';
import NavBar from '../../components/NavBar';
import { useGlobal } from '../../providers/Global';

function HomePage() {
  const { state } = useGlobal();
  const { videos } = state;
  const sectionRef = useRef(null);

  return (
    <>
    <NavBar />
    <Home ref={sectionRef}>
        <>
          <HomeTitle>Welcome to YouTube videoclips!</HomeTitle>
          <WrapperVideos>
            {videos && videos.map((video) => 
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
