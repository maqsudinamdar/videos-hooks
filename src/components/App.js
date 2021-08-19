import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'; 

import useVideos from '../hooks/useVideos';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [video, search] = useVideos('buildings');


    useEffect(() => {
        setSelectedVideo(video[0])
    }, [video])



    return (
        <div className="ui container" style={{ marginTop: '20px'}}>
            <SearchBar 
                onFormSubmit={ search }
            />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail 
                            video={selectedVideo} 
                        />
                    </div>
                    <div className="five wide column">                        
                        <VideoList  
                            videos={video}
                            onVideoSelect={ setSelectedVideo }
                        />                            
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;