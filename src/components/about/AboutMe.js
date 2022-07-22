import React from 'react';
import { useState } from 'react';
import Education from './Education';
import Overview from './Overview';
import Review from './Review';

const AboutMe = () => {

    let [overview, setOverview] = useState(true);
    let [education, setEducation] = useState(false);
    let [review, setReview] = useState(false);
    // let [line, setLine] = useState(false);

    // setLine(<div class="divider">OR</div>)



    return (
        <div className='bg-[#11213F] text-[#90AFDD] h-screen flex items-center'>
            <div className=' flex justify-evenly items-center'>
                <div className=' w-2/4 text-center '>
                    <i className='text-6xl font-bold text-[#1EC08F]'> About Me </i>
                    <div className='my-10'>
                        <div>
                            <button onClick={() => {
                                setOverview(true)
                                setEducation(false)
                                setReview(false)
                            }} className={`text-lg cursor-pointer hover:font-bold focus:font-bold  px-8 py-3 my-2 ${overview && 'text-red-500 border-b border-red-400'}`}> <i class="fa-solid fa-eye"></i> Overview </button>
                        </div>

                        <div>
                            <button onClick={() => {
                                setOverview(false)
                                setEducation(true)
                                setReview(false)
                            }} className={`text-lg cursor-pointer hover:font-bold focus:font-bold  px-8 py-3 my-2 ${education && 'text-red-500 border-b border-red-400'}`}><i class="fa-solid fa-graduation-cap"></i> Education </button>
                        </div>

                        <div>
                            <button onClick={() => {
                                setOverview(false)
                                setEducation(false)
                                setReview(true)
                                // setLine(true)
                            }} className={`text-lg cursor-pointer hover:font-bold focus:font-bold  px-8 py-3 my-2 ${review && 'text-red-500 border-b border-red-400'}`}><i class="fa-duotone fa-user-check"></i> Review  </button>
                        </div>

                    </div>
                </div>
                <div className=' w-2/4 pr-64 '>
                    {
                        overview && <Overview />
                    }
                    {
                        education && <Education />
                    }
                    {
                        review && <Review />
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutMe;