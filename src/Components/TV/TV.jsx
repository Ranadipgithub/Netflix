import './TV.css'
import tv from '../../assets/tv.png'
import { useEffect } from 'react';

export default function TV(){

    return(
        <div  className="tv container1">
            <div className='about-tv'>
                <h2>Enjoy on your TV</h2>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="videoPlay">
                <img src={tv} alt="" />
                <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay muted loop></video>
            </div>
        </div>
    )
}