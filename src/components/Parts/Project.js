import React from 'react';

const Project = () => {
    return (
        <div className=' bg-dark'>
            <div className='flex justify-center'>
                <div class="card w-2/5 bg-base-100 shadow-xl image-full m-2">
                    <figure><img src="https://i.ibb.co/HDnH5FR/warehouse-mobile.webp" alt="Shoes" /></figure>
                    <div class="card-body ">
                        <h2 class="card-title text-yellow-200">Clothing Warehouse</h2>
                        <p>It's a warehouse where a lot of cloth are stored for sell</p>
                        <div class="card-actions justify-between ">
                            <a target='_blank' href="https://warehouse-32ec4.web.app/" className='btn btn-primary'> Client Code </a>
                            <a target='_blank' href="https://warehouse-32ec4.web.app/" className='btn btn-primary'> Server Code </a>
                            <a target='_blank' href="https://warehouse-32ec4.web.app/" className='btn btn-primary'> Live View </a>
                        </div>
                    </div>
                </div>

                <div class="card w-2/5 bg-base-100 shadow-xl image-full m-2">
                    <figure><img src="https://i.ibb.co/n1cZPxN/Screenshot-10.png" alt="Parts" /></figure>
                    <div class="card-body ">
                        <h2 class="card-title text-yellow-200">Computer Parts Manufacturer</h2>
                        <p> It’s a parts manufacturer seller website. Where a lot of parts are available for wholesale sales.  </p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://parts-manufacturer-23ecb.web.app/" className='btn btn-primary'> Live View </a>
                        </div>
                    </div>
                </div>

            </div>


            <div className='flex justify-center  '>

                <div class="card w-2/5 bg-base-100 shadow-xl image-full m-2">
                    <figure><img src="https://i.ibb.co/fXF1hg0/Screenshot-174.png" className='p-3' alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-yellow-200">Bike Review</h2>
                        <p>It's a Bike Review Website based on a bike.</p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://bike-review-react-route-kayes.netlify.app/" className='btn btn-primary'> Live View </a>
                            {/* <a  class="btn btn-primary" >Buy Now</button> */}
                        </div>
                    </div>
                </div>

                <div class="card w-2/5 bg-base-100 shadow-xl image-full m-2">
                    <figure><img src="https://i.ibb.co/Qm4pDtR/Screenshot-175.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-yellow-200">Royal Convention Center</h2>
                        <p> It's a Conventional Center for Wedding Arrangements </p>
                        <div class="card-actions justify-end">
                            <a target='_blank' href="https://weading-by-kayes.netlify.app/" className='btn btn-primary'> Live View </a>
                            {/* <a  class="btn btn-primary" >Buy Now</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;