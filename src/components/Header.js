import React from 'react'
import logo from '../assets/lion-logo.jpg';
import './header.css';

const Header = () => {

    return (
        <>
            <div className='navbar'>
                <img src={logo} className='logo' />
                <h1 className='name'>Debu</h1>
            </div>

        </>
    )
}

export default Header