import React from 'react';

const Progress = () => {
    return (
        <div className='flex items-center flex-col-reverse'>

            <div className='py-2'>
                <div className='h-[28px] flex justify-between items-center w-[600px] bg-[#EEEEEE] rounded-lg'>
                    <p className='bg-[#00A1A7] h-full w-[70%] items-center rounded-l-lg'><span className='px-5 text-xl rounded-l-lg bg-[#04C2C9] text-dark font-semibold'>  Express  </span></p>
                    <p className='px-3 text-xl font-mono'> 70% </p>
                </div>
            </div>
            <div className='py-2'>
                <div className='h-[28px] flex justify-between items-center w-[600px] bg-[#EEEEEE] rounded-lg'>
                    <p className='bg-[#00A1A7] h-full w-[50%] items-center rounded-l-lg'><span className='px-5 text-xl rounded-l-lg bg-[#04C2C9] text-dark font-semibold'>  Node.js  </span></p>
                    <p className='px-3 text-xl font-mono'> 50% </p>
                </div>
            </div>
            <div className='py-2'>
                <div className='h-[28px] flex justify-between items-center w-[600px] bg-[#EEEEEE] rounded-lg'>
                    <p className='bg-[#00A1A7] h-full w-[70%] items-center rounded-l-lg'><span className='px-5 text-xl rounded-l-lg bg-[#04C2C9] text-dark font-semibold'>  Next  </span></p>
                    <p className='px-3 text-xl font-mono'> 70% </p>
                </div>
            </div>
            <div className='py-2'>
                <div className='h-[28px] flex justify-between items-center w-[600px] bg-[#EEEEEE] rounded-lg'>
                    <p className='bg-[#00A1A7] h-full w-[80%] items-center rounded-l-lg'><span className='px-5 text-xl rounded-l-lg bg-[#04C2C9] text-dark font-semibold'>  React  </span></p>
                    <p className='px-3 text-xl font-mono'> 80% </p>
                </div>
            </div>
            <div className='py-2'>
                <div className='h-[28px] flex justify-between items-center w-[600px] bg-[#EEEEEE] rounded-lg'>
                    <p className='bg-[#00A1A7] h-full w-[75%] items-center rounded-l-lg'><span className='px-5 text-xl rounded-l-lg bg-[#04C2C9] text-dark font-semibold'>  JavaScript  </span></p>
                    <p className='px-3 text-xl font-mono'> 75% </p>
                </div>
            </div>
            <div className='py-2'>
                <div className='h-[28px] flex justify-between items-center w-[600px] bg-[#EEEEEE] rounded-lg'>
                    <p className='bg-[#00A1A7] h-full w-[90%] items-center rounded-l-lg'><span className='px-5 text-xl rounded-l-lg bg-[#04C2C9] text-dark font-semibold'>  CSS  </span></p>
                    <p className='px-3 text-xl font-mono'> 90% </p>
                </div>
            </div>
            <div className='py-2'>
                <div className='h-[28px] flex justify-between items-center w-[600px] bg-[#EEEEEE] rounded-lg'>
                    <p className='bg-[#00A1A7] h-full w-[90%] items-center rounded-l-lg'><span className='px-5 text-xl rounded-l-lg bg-[#04C2C9] text-dark font-semibold'>  HTML  </span></p>
                    <p className='px-3 text-xl font-mono'> 90% </p>
                </div>
            </div>
        </div>

        // <div>
        //     {/* <h1 className='bg-[#007BFF]'> Kaj kih kore </h1> */}
        //     <div className='flex text-[#8892B0] items-center py-4 '>
        //         <p> React </p>
        //         <progress class="progress progress-secondary w-2/4 h-2 " value="50" max="100"></progress>
        //     </div>
        //     <div className=' py-4 '>
        //         <progress class="progress progress-secondary w-2/4 h-2" value="10" max="100"></progress>
        //     </div>
        //     <div className=' py-4 '>
        //         <progress class="progress progress-secondary w-2/4 h-2" value="40" max="100"></progress>
        //     </div>
        //     <div className=' py-4 '>
        //         <progress class="progress progress-secondary w-2/4 h-2" value="70" max="100"></progress>
        //     </div>
        //     <div className=' py-4 '>
        //         <progress class="progress progress-secondary w-2/4 h-2" value="100" max="100"></progress>
        //     </div>
        // </div>
    );
};

export default Progress;