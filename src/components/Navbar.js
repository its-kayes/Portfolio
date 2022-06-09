import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-dark  '>

            <div class="navbar bg-dark text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to='/project'> Projects </Link> </li>

                            {/* <li tabindex="0">
                            <a>
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}

                            <li> <Link to='/contact'> Contact Me  </Link> </li>
                            <li> <Link to='/activity'> Activity </Link> </li>
                        </ul>
                    </div>

                    <Link to='/' class="btn btn-ghost normal-case text-xl"><button className='border-[#1EC08F] px-4 py-2 rounded-lg'>
                        Emrul Kayes
                    </button></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {/* <li><a>Projects</a></li> */}
                        <li> <Link to='/project'> Projects </Link> </li>

                        {/* <li tabindex="0">
                        <a>
                            Parent
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li> */}
                        {/* <li><a>Contact Me</a></li> */}
                        <li> <Link to='/contact'> Contact Me  </Link> </li>
                        <li> <Link to='/activity'> Activity </Link> </li>
                        {/* <li><a>Activity</a></li> */}
                    </ul>
                </div>
                <div>
                    <a href="resume.pdf" className='btn' download> Download Resume</a>
                </div>
            </div>
            <p className='text-2xl text-red-500 font-bold text-center'> Under Development </p>
        </div>
    );
};

export default Navbar;