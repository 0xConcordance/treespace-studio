import {Connect} from './Connect'
import {Link} from "react-router-dom"

// STYLES
import '../styles/Navbar.css'

export const Navbar = () => {
    
    return(
        
    <div className='container'>
        <ul>
            <li>
                <Link to='/' className="">Dashboard</Link>
            </li>

            <li>
                <Link to='/gallery' className="">Your NFTs</Link>
            </li>

            <li>
                <Link to='/mint' className="">Mint</Link>
            </li>

            <li>
                <Link to='/earnings' className="">Earnings</Link>
            </li>

            <li className="align-left">
                <Connect/>
                
            </li>
        </ul>
    </div>
    );
}