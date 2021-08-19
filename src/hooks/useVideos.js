import React, { useState, useEffect } from 'react';

import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {

    const [videos, setVideo] = useState([]);

    useEffect(() => {
        
        search(defaultSearchTerm);
        
    }, [defaultSearchTerm]);


    const search = async (term) => {
        const data = await youtube.get('/search', {
            params: {
                q: term,
            },
        });

        setVideo(data.data.items);
    }

    return [videos, search]

}

export default useVideos;