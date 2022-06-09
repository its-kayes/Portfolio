import React from 'react';
import Banner from '../Parts/Banner';
import ContactMe from '../Parts/ContactMe';
import Project from '../Parts/Project';

const Portfolio = () => {
    return (
        <div className='bg-black'>
        
            <Banner> </Banner>

            <Project> </Project>

            <ContactMe> </ContactMe>

            <div className='text-white flex justify-around my-8'>
                <div className=' '>
                    <h1 className='text-3xl font-mono font-bold my-2'> List of Technology that I know </h1>
                    <div className='flex justify-around'>
                        <div className='p-10'>
                            <li className='p-1'> HTML </li>
                            <li className='p-1'> CSS </li>
                            <li className='p-1'> BOOTSTRAP </li>
                            <li className='p-1'> TAILWINDCSS </li>
                            <li className='p-1'> JAVASCRIPT </li>
                            <li className='p-1'> REACT JS </li>
                        </div>

                        <div className='p-10'>
                            <li className='p-1'> NODE JS </li>
                            <li className='p-1'> EXPRESS </li>
                            <li className='p-1'> MONGODB </li>
                            <li className='p-1'> FIREBASE </li>
                            <li className='p-1'> PAYMENT METHOD </li>
                            <li className='p-1'> HEROKU </li>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-mono font-bold my-2'> Educational Information  </h1>
                    <div className='my-10'>
                        <p> Studies B.sc in  Computer Science Engineering </p>
                        <p> Student of Shanto-Mariam University of Creative Technology </p>
                        <p> Last year of B.sc  </p>
                    </div>
                </div>
            </div>

            <dir className=''>
                <div className='flex justify-evenly py-20'>
                    <a target='_blank ' href="https://www.linkedin.com/in/its-kayes/"> <i class="fa-brands fa-linkedin text-8xl text-white"> </i></a>
                    <a target='_blank' href="https://github.com/its-kayes"> <i class="fa-brands fa-github text-8xl text-white"> </i>  </a>
                    <a target='_blank' href="https://www.facebook.com/kayes0000000/"> <i class="fa-brands fa-facebook text-8xl text-white"></i> </a>

                    {/* <i class="fa-brands fa-linkedin text-8xl"> </i>
                    <i class="fa-brands fa-facebook text-8xl "> </i> */}
                </div>
            </dir>
        </div>
    );
};

export default Portfolio;