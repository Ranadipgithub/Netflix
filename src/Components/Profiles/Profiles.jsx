import './Profiles.css'
import image from '../../assets/children.png'

export default function Profiles(){
    return(
        <div className="down-container">
            <div className="download">
                <div className="down-img">
                    <img src={image}  alt="" id='img1'/>
                </div>
                <div className="down-text">
                    <h2>Create profiles for kids</h2>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
        </div>
    )
}