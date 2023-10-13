import React from 'react';
import ThreedCard from './threedcomponents/ThreedCard';
import { ThreedProjects } from './threedcomponents/ThreedProjects';

const ThreeDpage = () => {

    const threedCards = ThreedProjects.map((project, i) => {
        return <ThreedCard key={i} project={project} />
    });

    return (
        <div className='m-10 mx-18 flex items-center flex-col space-y-5'>
            <div className='md:w-9/12'>
                <div className='font-inter font-bold text-6xl'>
                    [3D Projects]
                </div>
            </div>
            {threedCards}
        </div>
       
    );
}

export default ThreeDpage;