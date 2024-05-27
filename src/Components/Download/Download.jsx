import './Download.css'
import image1 from '../../assets/mobile-0819.jpg'
import image2 from '../../assets/boxshot.png'
import image3 from '../../assets/download-icon.gif'

export default function Download(){
    return(
        <div className="down-container">
            <div className="download">
                <div className="down-img">
                    <img src={image1}  alt="" id='img1'/>
                    <div className="bottom-cont">
                        <div id="img2">
                            <img src={image2} alt="" />
                        </div>
                        <div className="text">
                            <div id="text1">Stranger Things</div>
                            <div id="text2">Downloading...</div>
                        </div>
                        <div className="gif">
                            <img src={image3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="down-text">
                    <h2>Download your shows to watch offline</h2>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
        </div>
    )
}