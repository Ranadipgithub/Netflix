import './Hero.css'
import Navbar from '../Navbar/Navbar'

export default function Hero(){
    return(
        <div className='container hero'>
            <Navbar />
            <div className="hero-text">
                <h1>Unlimited movies, TV shows and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email or mobile number to create or restart your membership.</h3>
                <div className='input-box'>
                    <input type="text" placeholder='Email or mobile number'/>
                    <button className='large-btn'>Get Started</button>
                </div>
            </div>
        </div>
    )
}