import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical'

const Banner = () => {


    return (
        <div>
            <div className='flex justify-between items-center text-[#CBD5F6] p-20'>
                <div className=''>
                    <div>
                        <h1 className='text-7xl font-bold font-mono text-[#CBD5F6] amiri'> Hello! </h1>
                        <h1 className='text-5xl font-bold font-mono text-[#CBD5F6] amiri'> This is Emrul Kayes </h1>
                        {/* <span> H </span> */}
                        <p className='pt-3 text-xl font-semibold text-sky-400 '><Typical
                            steps={['Web Developer', 3500, 'MERN Stack Developer', 3500]}
                            loop={Infinity}
                            wrapper="p"
                        /> </p>
                        {/* <p className='text-lg'> kayes.ek8@gmail.com </p> */}
                        <p className='py-5 text-[#8892B0]'> I am a web developer. In the last few months I have completed more than 10+ websites project.
                            <p> I'm expert in HTML, CSS and JavaScript. As a library component I'm expert in both Bootstrap and TailwindCSS. </p>

                            Also expert in React js as a JavaScript framework. As a backend good at Node.js and Express.js. Also have good knowledge at Mongodb database </p>

                        <a href="resume.pdf" className='btn border-2 text-[#4AB9A7] font-semibold border-sky-300 normal-case hover:text-black hover:bg-sky-100' download> <i>Download Resume</i> <i class="fa-solid fa-download pl-2"></i> </a>

                    </div>
                </div>
                <img className='w-1/4 rounded-3xl' src="https://i.ibb.co/7GsGMZ9/1640680010421-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;