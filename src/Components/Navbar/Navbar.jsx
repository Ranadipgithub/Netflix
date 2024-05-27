import './Navbar.css'
import logo from '../../assets/logo.svg'

export default function Navbar(){
    return(
        <nav className='container'>
            <img src={logo} alt="" className='logo'/>
            <div>
                <select name='language'>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>
                <button className='btn'>Sign In</button>
            </div>
        </nav>
    )
}
