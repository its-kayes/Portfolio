import React from 'react';
import './ContactsLink.css';

const ContactsLink = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='text-white grid grid-cols-3 gap-3 justify-center'>
                <a href='mail' target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#8C2242] hover:bg-[#2F2030] contactCard'>
                    <div className='pr-5'>
                        <i class="text-[#8C2242] text-5xl fa-solid fa-envelope"></i>
                    </div>
                    <div className='grid grid-cols-1'>
                        <span className='justify-start text-xl font-semibold text-white'>Mail</span>
                        <span className='text-[#8892B0]'> kayes.ek8@gmail.com </span>
                    </div>
                </a>
                <a href="https://github.com/its-kayes" target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#747474] hover:bg-[#2B303A] contactCard'>
                    <div className='pr-5'>
                        <i class="text-[#747474] text-5xl fa-brands fa-github"></i>
                    </div>
                    <div className='grid grid-cols-1'>
                        <span className='justify-start text-xl font-semibold text-white'>Githud</span>
                        <span className='text-[#8892B0]'> /its-kayes </span>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/its-kayes/" target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#0077B5] hover:bg-[#1D2D46] contactCard'>
                    <div className='pr-5'>
                        <i class="text-[#0077B5] text-5xl fa-brands fa-linkedin"></i>
                    </div>
                    <div className='grid grid-cols-1'>
                        <span className='justify-start text-xl font-semibold text-white'>LinkedIn</span>
                        <span className='text-[#8892B0]'> /in/its-kayes </span>
                    </div>
                </a>
                <a href="https://www.facebook.com/kayes0000000/" target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#4B7DE0] hover:bg-[#23324E] contactCard'>
                    <div className='pr-5'>
                        <i class="text-[#4B7DE0] text-5xl fa-brands fa-facebook"></i>
                    </div>
                    <div className='grid grid-cols-1'>
                        <span className='justify-start text-xl font-semibold text-white'>Facebook</span>
                        <span className='text-[#8892B0]'> /kayes0000000 </span>
                    </div>
                </a>
                <a href="https://discord.com/users/Emrul Kayes#3811" target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#6E83CB] hover:bg-[#2A334A] contactCard'>
                    <div className='pr-5'>
                        <i class="text-[#6E83CB] text-5xl fa-brands fa-discord"></i>
                    </div>
                    <div className='grid grid-cols-1'>
                        <span className='justify-start text-xl font-semibold text-white'>Discord</span>
                        <span className='text-[#8892B0]'> Emrul Kayes#3811 </span>
                    </div>
                </a>
                <a href="https://www.instagram.com/___kayes__/" target='_blank' className=' bg-[#1F2937] flex pl-5 pr-20 py-3 items-center rounded-lg border-r-2 border-[#da1a60] hover:bg-[#504e4f] contactCard'>
                    <div className='pr-5'>
                        <i class="text-[#da1a60] text-5xl fa-brands fa-instagram"></i>
                    </div>
                    <div className='grid grid-cols-1'>
                        <span className='justify-start text-xl font-semibold text-white'>Instagram</span>
                        <span className='text-[#8892B0]'> /___kayes__ </span>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default ContactsLink;