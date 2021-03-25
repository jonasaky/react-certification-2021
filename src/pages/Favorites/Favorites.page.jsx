import React from 'react';
import { Title, HomeLink, WrapperVideos } from './styled';
import VideoCard from '../../components/VideoCard';
import { useGlobal } from '../../providers/Global';

function Favorites() {
    const { state } = useGlobal();
    const { favoritesVid } = state;

    return (
        <>
            <HomeLink to="/">← Go home</HomeLink>
            <Title>{`my Favs <3`}</Title>
            <WrapperVideos>
            {favoritesVid && favoritesVid.map((video) => 
              <VideoCard 
              key={video.videoId}
              videoId={video.videoId} 
              thumbnail={video.thumbnail} 
              title={video.title}
              description={video.description}
              publishedAt={video.publishedAt} 
              route="favdetail"
              />)}
            </WrapperVideos>
        </>
    );
}

export default Favorites;