import React from 'react';
import Banner from '../Parts/Banner';

const Portfolio = () => {
    return (
        <div className=' bg-black '>
        
            <Banner> </Banner>


            <div className='flex justify-around py-16 '>
                <div class="card w-96 bg-base-100 shadow-xl image-full ">
                    <figure><img src="https://i.ibb.co/HDnH5FR/warehouse-mobile.webp" alt="Shoes" /></figure>
                    <div class="card-body ">
                        <h2 class="card-title">Clothing Warehouse</h2>
                        <p>It's a warehouse where a lot of cloth are stored for sell</p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://warehouse-32ec4.web.app/" className='btn btn-primary'> Live View </a>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/fXF1hg0/Screenshot-174.png" className='p-3' alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Bike Review</h2>
                        <p>It's a Bike Review Website based on a bike.</p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://bike-review-react-route-kayes.netlify.app/" className='btn btn-primary'> Live View </a>
                            {/* <a  class="btn btn-primary" >Buy Now</button> */}
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/Qm4pDtR/Screenshot-175.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Royal Convention Center</h2>
                        <p> It's a Conventional Center for Wedding Arrangements </p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://weading-by-kayes.netlify.app/" className='btn btn-primary'> Live View </a>
                            {/* <a  class="btn btn-primary" >Buy Now</button> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-white flex justify-around my-8'>
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

            <dir className=''>
                <div className='flex justify-evenly py-20'>
                    <a target='_blank ' href="https://www.linkedin.com/in/its-kayes/"> <i class="fa-brands fa-linkedin text-8xl text-white"> </i></a>
                    <a target='_blank' href="https://github.com/its-kayes"> <i class="fa-brands fa-github text-8xl text-white"> </i>  </a>
                    <a target='_blank' href="https://www.facebook.com/kayes0000000/"> <i class="fa-brands fa-facebook text-8xl text-white"></i> </a>

                    {/* <i class="fa-brands fa-linkedin text-8xl"> </i>
                    <i class="fa-brands fa-facebook text-8xl "> </i> */}
                </div>
            </dir>
        </div>
    );
};

export default Portfolio;