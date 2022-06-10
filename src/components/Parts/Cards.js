import React, { useEffect, useState } from 'react';

const Cards = () => {

    let [projects, setProjects] = useState();

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))}
        , [])

    return (

        <div className='w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col'>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10' >
                {projects?.map(project =>
                    <div className='text-white animate__animated animate__fadeIn w-full p-6 border-2 border-sky-300 rounded-lg  '>
                        <div>
                            <div>
                                <img className=' w-full border border-sky-300 rounded-lg' src={project.frontImg} alt="" />
                                <div className='my-4 flex justify-between'>
                                    <p className='text-xl font-mono font-bold text-sky-400 '> {project.name} </p>
                                    <p className='py-1 px-4 border-2 border-sky-300 rounded-lg'> More Details </p>
                                </div>
                            </div>

                            <div>
                                <p className='font-light text-lg'> {"->"} {project.text}  </p>
                                {/* <div class="divider bg-white"></div> */}
                                <div className='border-b my-4 border-lynch opacity-30'>  </div>
                                <li> Point 1 </li>
                                <li> Point 2 </li>
                                <li> Point 3 </li>

                            </div>

                            <div className='border-b my-4 border-lynch opacity-30'>  </div>

                            <div className='flex justify-evenly'>
                                <button> <a target='_blank' href={project.Client} className=' py-2 px-4 border-2 border-sky-300 rounded-lg '> Client Code </a> </button>
                                <button> <a target='_blank' href={project.Server} className='py-2 px-4 border-2 border-sky-300 rounded-lg'> Server Code </a> </button>
                                <button> <a target='_blank' href={project.Live} className='py-2 px-4 border-2 border-sky-300 rounded-lg'> Live Link </a> </button>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>


    );
};

export default Cards;