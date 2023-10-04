import React from 'react';
import ThreedCard from './threedcomponents/ThreedCard';

const ThreeDpage = () => {
    return (
        <div className='m-10 mx-18 flex items-center flex-col space-y-5'>
            <div className='md:w-9/12'>
                <div className='font-inter font-bold text-6xl'>
                    [3D Projects]
                </div>
            </div>
            <ThreedCard />
            <ThreedCard />
        </div>
       
    );
}

export default ThreeDpage;