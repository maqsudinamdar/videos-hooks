import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'; 
import youtube from '../api/youtube';

class App extends React.Component{

    state = { videos: [], selectedVideo: null };
    
    onTermSubmit = async (term) => {

        const response = await youtube.get('/search', {
            params: {
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyB6fGAp5FULVRcdWaNoFzezPOiKZNNuOCk",
                q: term,
            },
        });

        this.setState({ videos: response.data.items });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
        console.log('From selectedVideo: ', this.state.selectedVideo);
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px'}}>
                <SearchBar 
                    onSubmit={ this.onTermSubmit }
                />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">                        
                            <VideoList  
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />                            
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default App;