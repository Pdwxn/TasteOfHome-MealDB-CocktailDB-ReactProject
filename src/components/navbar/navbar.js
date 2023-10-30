import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'

function Navbar() {
    return (
        <div className="nvb-container">
            <header className="nvb-wrapper">
                <div className='nvb-left'>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className='nvb-center'>
                    <Link to={'/Recipes'} style={{ textDecoration: 'none' }}><li>Recipes</li></Link>
                    <Link to={'/Categories'} style={{ textDecoration: 'none' }}><li>Categories</li></Link>
                    <Link to={'/Cocktails'} style={{ textDecoration: 'none' }}><li>Cocktails</li></Link>
                    <Link to={'/Contact'} style={{ textDecoration: 'none' }}><li>Contact</li></Link>
                </ul>
                <div className='nvb-right'>
                    <input type='text' placeholder='Search...'></input>
                </div>
            </header>
        </div>
    )
}

export default Navbar