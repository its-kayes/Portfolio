import React from 'react';

const SocialLinks = () => {
    return (
        <div>
            <dir className=''>
                <div className='flex justify-evenly py-20'>
                    <a className='hover:blur-sm' target='_blank ' href="https://www.linkedin.com/in/its-kayes/"> <i class="fa-brands fa-linkedin text-8xl text-white"> </i></a>
                    <a className='hover:blur-sm' target='_blank' href="https://github.com/its-kayes"> <i class="fa-brands fa-github text-8xl text-white"> </i>  </a>
                    <a className='hover:blur-sm' target='_blank' href="https://www.facebook.com/kayes0000000/"> <i class="fa-brands fa-facebook text-8xl text-white"></i> </a>
                </div>
            </dir>
        </div>
    );
};

export default SocialLinks;