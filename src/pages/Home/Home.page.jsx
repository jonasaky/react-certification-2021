import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import mock from '../../mock.json';
import VideoCard from '../../components/VideoCard';
import Styled from './styled';

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
    <Styled.HomePage ref={sectionRef}>
      <Styled.HomeTitle>Welcome to YouTube videoclips!</Styled.HomeTitle>
      {authenticated ? (
        <>
          <Styled.WrapperVideos>
            {youtubeVideos.map((video) => 
              <VideoCard 
              key={video.etag} 
              thumbnail={video.snippet.thumbnails.default.url} 
              title={video.snippet.title} />)}
          </Styled.WrapperVideos>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </Styled.HomePage>
  );
}

export default HomePage;
