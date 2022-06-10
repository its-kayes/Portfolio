import React, { useEffect, useState } from 'react';

const Cards = () => {

    let [projects, setProjects] = useState();

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));

    }
        , [])


    return (
        <div className='grid grid-cols-2 gap-10 items-center' >
            {projects?.map(project =>
                <div className='text-white border-2 border-blue-400 p-3  w-3/4'>
                    <div>
                        <div>
                            <img className=' ' src="https://i.ibb.co/Qm4pDtR/Screenshot-175.png" alt="" />
                        </div>

                        <div>

                            <li> Point 1 </li>
                            <li> Point 2 </li>
                            <li> Point 3 </li>

                        </div>

                        <div>
                            <button> button 1 </button>
                            <button> button 2 </button>
                            <button> button 3 </button>
                        </div>
                    </div>
                </div>)}


        </div>

    );
};

export default Cards;