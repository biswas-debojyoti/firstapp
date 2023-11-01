import React from 'react'
import logo from '../assets/lion-logo.jpg';
import './header.css';

const Header = () => {
    return (
        <>
            <div className='navbar'>

               <span>
                <img src={logo} className='logo' />
                <span> <h1>Debu</h1></span>
                </span> 
            </div>

        </>
    )
}

export default Header