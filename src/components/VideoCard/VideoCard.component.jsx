import React from 'react';
import './VideoCard.styles.css';

const VideoCard = (props) => {

    return (
        <div className="video-card">
            <img className="video-img" src={props.thumbnail} />
            <p className="video-title">{props.title}</p>
        </div>
    )
}

export default VideoCard;