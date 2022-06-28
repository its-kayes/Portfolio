
import React, { useEffect, useState } from 'react';
import useProjects from '../../hook/useProjects';
import Spinier from '../Shared/Spinier';

const Projects = () => {

    let projects = useProjects();
    if(!projects.length) {
        return <Spinier> </Spinier>
    }

  
    return (

        <div className='w-full py-10 bg-black'>

            <div className='flex justify-center py-20'>
                <h1 className='text-white text-2xl text-center rounded-2xl font-mono py-2 w-3/6 border-2 border-sky-300'> <i class="fa-solid fa-caret-down px-4"></i> List of project that I hove done <i class="fa-solid fa-caret-down px-4"></i> </h1>
            </div>

            <div className=' w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col'>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10' >
                    {projects.map(project =>
                        <div className='text-white animate__animated animate__fadeIn w-full p-6 border-2 border-sky-300 rounded-lg  '>
                            <div>
                                <div>
                                    <img className=' w-full border border-sky-300 rounded-lg' src={project.frontImg} alt="" />
                                    <div className='my-4 flex justify-between'>
                                        <p className='text-xl font-mono font-bold text-sky-400 '> {project.name} </p>
                                        <a target='blank' href={project.moreDetails} className='py-1 px-4 border-2 border-sky-300 rounded-lg'> More Details <i class="fa-solid fa-caret-right ps-2"></i> </a>
                                    </div>
                                </div>

                                <div>
                                    <p className='font-light text-lg'> {"->"} {project.text}  </p>
                                    {/* <div class="divider bg-white"></div> */}
                                    <div className='border-b my-4 border-lynch opacity-30'>  </div>
                                    <li> <i> {project.pA} </i> </li>
                                    <li> <i> {project.pB} </i> </li>
                                    <li> <i> {project.pC} </i> </li>

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
        </div>


    );
};

export default Projects;

