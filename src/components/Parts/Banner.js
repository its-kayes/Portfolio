import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {


    return (
        <div>
            <div className='flex justify-between items-center text-white p-20'>
                <div className=''>
                    <div>
                        <h1 className='text-7xl font-bold font-mono text-orange-300'> Emrul Kayes </h1>
                        <p className='text-xl font-bold '> Web Developer </p>
                        <p className='text-lg'> kayes.ek8@gmail.com </p>
                        <p className='py-5'> I am a web developer. In the last few months I have completed more than 10+ websites project.
                            <p> I'm expert in HTML, CSS and JavaScript. As a library component I'm expert in both Bootstrap and TailwindCSS. </p>

                            Also expert in React js as a JavaScript framework. As a backend good at Node.js and Express.js. Also have good knowledge at Mongodb database </p>
                        
                        <a href="resume.pdf" className='btn border-2 border-sky-300 normal-case' download> Download Resume</a>
                        
                    </div>
                </div>
                <img className='w-1/4 rounded-3xl' src="https://i.ibb.co/7GsGMZ9/1640680010421-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;