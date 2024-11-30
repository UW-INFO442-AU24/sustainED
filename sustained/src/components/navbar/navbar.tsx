import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from './booklogo.png'

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header>
            <nav className='navbar'>
                <div className="logo-container">
                    <Link to="/" onClick={() => setIsOpen(false)}><img src={logo} alt="Logo" className="logo" /></Link>
                </div>  
                <ul className={`${isOpen ? 'open' : ''}`}>
                    <li onClick={() => setIsOpen(false)}><Link to="/" className='link'>Home</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link to="/quiz-intro" className='link'>Quiz</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link to="/library" className='link'>Resources</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link to="/events" className='link'>Events</Link></li>
                    <li onClick={() => setIsOpen(false)}><Link to="/profile" className='link'>Profile</Link></li>
                </ul>
                <button className='menuButton' onClick={toggleMenu}>
                    ☰
                </button>
            </nav>
        </header>
    )
}

export default Navbar