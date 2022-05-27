import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <div className='nav-logo-container'>
                            <p><i class="fa-brands fa-instagram"></i></p>
                            <p><i class="fa-brands fa-facebook"></i></p>
                            <p><i class="fa-brands fa-github-square"></i></p>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Nav;