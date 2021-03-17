import React, { useRef, useState } from 'react';
// import { useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import mock from '../../mock.json';
import VideoCard from '../../components/VideoCard';
import { HomePage as Home, HomeTitle, WrapperVideos, MyLink } from './styled';
import NavBar from '../../components/NavBar';

function HomePage() {
  // const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();
  const [videos, setVideos] = useState(mock.items);

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <>
    <NavBar onVideosChanged={setVideos}/>
    <Home ref={sectionRef}>
      {authenticated ? (
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
      ) : (
        <MyLink to="/login">let me in →</MyLink>
      )}
    </Home>
    </>
  );
}

export default HomePage;
