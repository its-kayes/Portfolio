// import React from 'react';

// const Project = () => {
//     return (
//         <div className=' bg-dark'>
//             <div className='flex justify-center'>
//                 <div class="card w-2/5 bg-base-100 shadow-xl image-full m-2">
//                     <figure><img src="https://i.ibb.co/HDnH5FR/warehouse-mobile.webp" alt="Shoes" /></figure>
//                     <div class="card-body ">
//                         <h2 class="card-title text-yellow-200">Clothing Warehouse</h2>
//                         <p>It's a warehouse where a lot of cloth are stored for sell</p>
//                         <div class="card-actions justify-between ">
//                             <a target='_blank' href="https://warehouse-32ec4.web.app/" className='btn btn-primary'> Client Code </a>
//                             <a target='_blank' href="https://warehouse-32ec4.web.app/" className='btn btn-primary'> Server Code </a>
//                             <a target='_blank' href="https://warehouse-32ec4.web.app/" className='btn btn-primary'> Live View </a>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="card w-2/5 bg-base-100 shadow-xl image-full m-2">
//                     <figure><img src="https://i.ibb.co/n1cZPxN/Screenshot-10.png" alt="Parts" /></figure>
//                     <div class="card-body ">
//                         <h2 class="card-title text-yellow-200">Computer Parts Manufacturer</h2>
//                         <p> It’s a parts manufacturer seller website. Where a lot of parts are available for wholesale sales.  </p>
//                         <div class="card-actions justify-end">
//                             <a target='_blank' href="https://parts-manufacturer-23ecb.web.app/" className='btn btn-primary'> Live View </a>
//                         </div>
//                     </div>
//                 </div>

//             </div>


//             <div className='flex justify-center  '>

//                 <div class="card w-2/5 bg-base-100 shadow-xl image-full m-2">
//                     <figure><img src="https://i.ibb.co/fXF1hg0/Screenshot-174.png" className='p-3' alt="Shoes" /></figure>
//                     <div class="card-body">
//                         <h2 class="card-title text-yellow-200">Bike Review</h2>
//                         <p>It's a Bike Review Website based on a bike.</p>
//                         <div class="card-actions justify-end">
//                             <a target='_blank' href="https://bike-review-react-route-kayes.netlify.app/" className='btn btn-primary'> Live View </a>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="card w-2/5 bg-base-100 shadow-xl image-full m-2">
//                     <figure><img src="https://i.ibb.co/Qm4pDtR/Screenshot-175.png" alt="Shoes" /></figure>
//                     <div class="card-body">
//                         <h2 class="card-title text-yellow-200">Royal Convention Center</h2>
//                         <p> It's a Conventional Center for Wedding Arrangements </p>
//                         <div class="card-actions justify-end">
//                             <a target='_blank' href="https://weading-by-kayes.netlify.app/" className='btn btn-primary'> Live View </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Project;


import React, { useEffect, useState } from 'react';

const Projects = () => {

    let [projects, setProjects] = useState();

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }
        , [])

    return (

        <div className='w-full py-10 bg-black'>


            <div className=' w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col'>

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
        </div>


    );
};

export default Projects;

