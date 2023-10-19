import React from 'react'
import logo from '../../logo.svg'
import './footer.css'

function Footer() {
    return (
        <div className='ftr-container'>
            <footer className='ftr-wrapper'>
                <div className='ftr-left'>
                    <img src={logo} alt='logo' />
                </div>
                <p className='ftr-right'>
                    W 47th Street <br />Hell's Kitchen, New York <br />Postal code: 10036 <br />E.E.U.U
                </p>
            </footer>
        </div>
    )
}

export default Footer