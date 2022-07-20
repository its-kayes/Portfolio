import React from 'react';
import Progress from './Progress';

const About = () => {
    return (
        <div className='bg-[#0A182E] h-screen'>
            <h1 className='text-red-400 text-3xl text-center py-10'> <i class="fa-solid fa-xmark px-2"></i> Under Development <i class="fa-solid fa-xmark px-2"></i> </h1>
            <div className='text-white flex justify-around  '>
                <div className=' '>
                    <h1 className='text-3xl font-mono font-bold my-2'> List of Technology that I know </h1>
                    <div className='flex justify-around'>
                        <div className='p-10'>
                            <li className='p-1'> HTML </li>
                            <li className='p-1'> CSS </li>
                            <li className='p-1'> BOOTSTRAP </li>
                            <li className='p-1'> TAILWINDCSS </li>
                            <li className='p-1'> JAVASCRIPT </li>
                            <li className='p-1'> REACT JS </li>
                        </div>

                        <div className='p-10'>
                            <li className='p-1'> NODE JS </li>
                            <li className='p-1'> EXPRESS </li>
                            <li className='p-1'> MONGODB </li>
                            <li className='p-1'> FIREBASE </li>
                            <li className='p-1'> PAYMENT METHOD </li>
                            <li className='p-1'> HEROKU </li>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-mono font-bold my-2'> Educational Information  </h1>
                    <div className='my-10'>
                        <p> Studies B.sc in  Computer Science Engineering </p>
                        <p> Student of Shanto-Mariam University of Creative Technology </p>
                        <p> Last year of B.sc  </p>
                    </div>
                </div>

            </div>

            


            <Progress>  </Progress>
        </div>
    );
};

export default About;