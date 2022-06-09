import React from 'react';
import Banner from '../Parts/Banner';
import ContactMe from '../Parts/ContactMe';
import Progress from '../Parts/Progress';
import Project from '../Parts/Project';

const Portfolio = () => {
    return (
        <div className='bg-black'>
        
            <Banner> </Banner>

            {/* <Project> </Project>

            <ContactMe> </ContactMe> */}

            {/* <Progress> </Progress> */}

            

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