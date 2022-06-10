import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    let { id } = useParams();
    let [pDetails, setPdetails] = useState();
    useEffect(()=>{
        fetch(`projects.json/${id}`)
        .then(res=> res.json())
        .then(data=> setPdetails(data));
    },[])

    return (
        <div>
            <h1 className='text-5xl text-red-400'> {pDetails?.length} </h1>
        </div>
    );
};

export default ProjectDetails;