import React from 'react';
import { useQuery } from 'react-query'
import Spinier from '../components/Shared/Spinier';

const useProjects = () => {
    
    let {data: projects, isLoading, refetch} = useQuery('projects', () => fetch('http://localhost:5000/projects').then(res => res.json()))

    if(isLoading) {
        return <Spinier> </Spinier>
    }

    return projects;
};

export default useProjects;