import React from 'react';

const Progress = () => {
    return (
        <div>
            <h1 className='bg-[#007BFF]'> Kaj kih kore </h1>
            <div className=' py-4 '>
                <progress class="progress progress-secondary w-2/4 h-2 " value="50" max="100"></progress>
            </div>
            <div className=' py-4 '>
                <progress class="progress progress-secondary w-2/4 h-2" value="10" max="100"></progress>
            </div>
            <div className=' py-4 '>
                <progress class="progress progress-secondary w-2/4 h-2" value="40" max="100"></progress>
            </div>
            <div className=' py-4 '>
                <progress class="progress progress-secondary w-2/4 h-2" value="70" max="100"></progress>
            </div>
            <div className=' py-4 '>
                <progress class="progress progress-secondary w-2/4 h-2" value="100" max="100"></progress>
            </div>
        </div>
    );
};

export default Progress;