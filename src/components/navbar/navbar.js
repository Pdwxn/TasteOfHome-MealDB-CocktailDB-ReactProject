import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'

function Navbar() {
    return (
        <div className="nvb-container">
            <header className="nvb-wrapper">
                <div className='nvb-left'>
                    <Link>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className='nvb-center'>
                    <li>Recipes</li>
                    <li>Categories</li>
                    <li>Cocktails</li>
                    <li>Contact</li>
                </ul>
                <div className='nvb-right'>
                    <input type='text' placeholder='Search...'></input>
                </div>
            </header>
        </div>
    )
}

export default Navbar