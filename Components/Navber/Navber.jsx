import React from 'react';
import './Navbar.css';
import navberData from '../Data/NavbarData';
const Navber = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center">
                        {
                            navberData.map(data=>
                                <li key={data.id} className="nav-item">
                                    <a className="nav-link" href="/">{data.item}</a>
                                </li>
                            )
                        }
                        {/* 
                        <li className="nav-item">
                            <a className="nav-link" href="/">SELL ON BARAZ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">CUSTOMER CARE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">TRACK MY ORDER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">SINGUP / LOGIN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">BAZRZ AFFILIATE PROGRAM</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">ভাষা</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navber;