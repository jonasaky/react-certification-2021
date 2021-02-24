import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import mock from '../../mock.json';
import VideoCard from '../../components/VideoCard';
import { HomePage as Home, HomeTitle, WrapperVideos, MyLink } from './styled';

function HomePage() {
  const youtubeVideos = mock.items;
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <Home ref={sectionRef}>
      {authenticated ? (
        <>
          <HomeTitle>Welcome to YouTube videoclips!</HomeTitle>
          <WrapperVideos>
            {youtubeVideos.map((video) => 
              <VideoCard 
              key={video.etag} 
              thumbnail={video.snippet.thumbnails.default.url} 
              title={video.snippet.title} />)}
          </WrapperVideos>
        </>
      ) : (
        <MyLink to="/login">let me in →</MyLink>
      )}
    </Home>
  );
}

export default HomePage;
