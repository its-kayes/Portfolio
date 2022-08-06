import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-dark  '>

            <div class="navbar bg-[#11213F] text-[#90AFDD]">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shad
                        ow bg-base-100 rounded-box w-52">
                            <li> <Link to='/'> <i> Home</i> </Link> </li>
                            <li> <Link to='/project'> <i> Projects </i></Link> </li>

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

                            <li> <Link to='/contact'> <i> Contact Me </i> </Link> </li>
                            {/* <li> <Link to='/activity'> Activity </Link> </li> */}
                            <li> <Link to='/about'> <i> About Me </i></Link> </li>
                        </ul>
                    </div>

                    <Link to='/' class="normal-case text-2xl pl-4 amiri"><button> <i>
                        Emrul Kayes</i>
                    </button></Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li> <Link to='/'> <i> Home</i> </Link> </li>
                        {/* <li><a> <i>Projects</i></a></li> */}
                        <li> <Link to='/project'> <i> Projects </i></Link> </li>

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
                        {/* <li><a> <i>Contact Me</i></a></li> */}
                        <li> <Link to='/contact'> <i> Contact Me  </i></Link> </li>
                        {/* <li> <Link to='/activity'> <i> Activity </i></Link> </li> */}
                        <li> <Link to='/aboutme'> <i> About Me </i></Link> </li>
                        {/* <li><a> <i>Activity</a></li> */}
                    </ul>
                </div>
                <div>
                    <a href="resume.pdf" className='btn border-2 text-[#4AB9A7] border-sky-300 hover:text-black hover:bg-sky-100 normal-case' download> <i> Download Resume </i></a>
                </div>
            </div>
            {/* <p className='text-2xl text-red-500 font-bold text-center'> Under Development </p> */}
        </div>
    );
};

export default Navbar;