import React from 'react';

import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {

    return (
            <div onClick={() => onVideoSelect(video)} className="video-item item">
                <img 
                    className="ui image"
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.thumbnails.default.url}
                />
                <div className="content">
                    <div className="header">{video.snippet.title} </div>
                    <div className="description">Updated 10 mins ago</div>
                </div>
            </div>
    );
}

export default VideoItem;