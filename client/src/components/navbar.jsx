import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../css/style.css';
import Logo from '../images/Logo.png';
import UpcomingShows from './upcomingShows';
import About from './about'
import Header from './header';
import NewsSignup from './newsSignup';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <div>
                <nav>
                    <a href="/"><img src={Logo} alt="Logo" /></a>
                    <div className='burger-menu'>
                        <button className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                        {isOpen && (
                            <div className="menu-overlay">
                                <ul className='menu-list'>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/upcomingShows">Upcoming Shows</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/newsSignup">Sign up for News</Link></li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>

                <Routes>
                    <Route path='/' element={<Header />} />
                    <Route path="/upcomingShows" element={<UpcomingShows />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/newsSignup" element={<NewsSignup />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Navbar;