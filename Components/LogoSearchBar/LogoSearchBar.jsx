import React from 'react';
import './LogoSearchBar.css';
import logo from '../../images/logo.png';

const LogoSearchBar = () => {
    return (
        <div className='container-fluid search-container pt-2 d-flex justify-content-center align-items-center'>
            <a href="/"><img className='logo' width={150} src={logo} alt="Logo at Baraz" /></a>
            <input type="text" className="search-bar" placeholder='Search in Baraz' id="" />
            <button>Search</button>
        </div>
    );
};

export default LogoSearchBar;