import React from 'react';
import { useState } from 'react';
import Education from './Education';
import Overview from './Overview';
import Experience from './Experience';
import Courses from './Courses';

const AboutMe = () => {

    let [overview, setOverview] = useState(true);
    let [education, setEducation] = useState(false);
    let [experience, setExperience] = useState(false);
    let [course, setCourse] = useState(false);

    // setLine(<div class="divider">OR</div>)



    return (
        <div className='bg-[#0A182E] text-[#90AFDD] h-screen flex items-center'>
            <div className=' flex justify-evenly items-center'>
                <div className=' w-2/4 text-center '>
                    <i className='text-6xl font-bold text-[#1EC08F]'> About Me </i>
                    <div className='my-10'>
                        <div>
                            <button onClick={() => {
                                setOverview(true)
                                setEducation(false)
                                setExperience(false)
                                setCourse(false)
                            }} className={`text-lg cursor-pointer hover:font-bold focus:font-bold font-mono px-8 pb-2 my-2 ${overview && 'text-red-500 border-b border-red-400'}`}> <i class="pr-2 fa-solid fa-eye"></i> Overview </button>
                        </div>

                        <div>
                            <button onClick={() => {
                                setOverview(false)
                                setEducation(false)
                                setExperience(false)
                                setCourse(true)
                            }} className={`text-lg cursor-pointer hover:font-bold focus:font-bold font-mono px-8 pb-2 my-2 ${course && 'text-red-500 border-b border-red-400'}`}><i class="pr-2 fa-solid fa-crown"></i> Courses </button>
                        </div>

                        <div>
                            <button onClick={() => {
                                setOverview(false)
                                setEducation(true)
                                setExperience(false)
                                setCourse(false)
                            }} className={`text-lg cursor-pointer hover:font-bold focus:font-bold font-mono px-8 pb-2 my-2 ${education && 'text-red-500 border-b border-red-400'}`}><i class="pr-2 fa-solid fa-graduation-cap"></i> Education </button>
                        </div>
                       
                        <div>
                            <button onClick={() => {
                                setOverview(false)
                                setEducation(false)
                                setExperience(true)
                                setCourse(false)
                            }} className={`text-lg cursor-pointer hover:font-bold focus:font-bold font-mono px-8 pb-2 my-2 ${experience && 'text-red-500 border-b border-red-400'}`}><i class="pr-2 fa-solid fa-crown"></i> Experience </button>
                        </div>

                    </div>
                </div>
                <div className=' w-2/4 pr-56 border-l pl-20 border-slate-600'>
                    {
                        overview && <Overview />
                    }
                    {
                        education && <Education />
                    }
                    {
                        experience && <Experience />
                    }
                    {
                        course && <Courses />
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutMe;