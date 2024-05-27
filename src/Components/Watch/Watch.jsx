import './Watch.css'
import watch from '../../assets/device-pile-in.png'

export default function Watch(){

    return(
        <div  className="watch container1">
            <div className='about'>
                <h2>Watch everywhere</h2>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="Video">
                <img src={watch} alt="" />
                <div className="videoSrc">
                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoPlay muted loop></video>
                </div>
            </div>
        </div>
    )
}