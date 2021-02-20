import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import mock from '../../mock.json';
import VideoCard from '../../components/VideoCard';

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
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to YouTube videoclips!</h1>
      {authenticated ? (
        <>
          <div className="videoContainer">
            {youtubeVideos.map((video) => 
              <VideoCard 
              key={video.etag} 
              thumbnail={video.snippet.thumbnails.default.url} 
              title={video.snippet.title} />)}
          </div>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
