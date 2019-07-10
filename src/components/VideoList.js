import React from 'react';

import { Channel } from '../services/EventEmmitter';

function VideoList(props) {
    const videos = props.videos || [];

    function handleClick(event) {
        console.log(event);
        Channel.emit('videoList:click',event.target.id);
    }
    
    return (
        <ul className="video-list">
            {
                videos.map(video => (
                    <li className="video" key={video.id} onClick={handleClick}>
                        <img src={video.img} alt={video.name}/>
                        <div>{video.name}</div>
                    </li>

                ))
            }
        </ul>
    )
}

export default VideoList;