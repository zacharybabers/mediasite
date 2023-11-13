import React from 'react';

const ThreedCard = ({project}) => {
    return(
        <div className='overflow-hidden p-2 lg:shrink-0 md:w-9/12 font-inter bg-white shadow-md outline outline-1 shadow-stone-500 outline-stone-400'>
            <h1 className='underline underline-offset-2 text-xl m-2 mb-8 font-ibm font-semibold ml-6'> {project.title} </h1>
            <div className='flex flex-col md:flex-row md:h-60 space-y-5 md:space-y-0 pb-6 items-center md:items-stretch'>
                <div className='mx-6 md:mx-2 md:ml-6 md:w-2/12 text-lg line-clamp-8 overflow-hidden'>
                    {project.description}
                </div>
                <div className='flex flex-col md:flex-row w-10/12 space-y-5 md:space-y-0 justify-center md:justify-evenly content-center'>
                    <img src={project.pic1Path} alt='random render' className="object-cover h-30 md:h-full md:w-4/12  shadow-md shadow-stone-800 outline-2 rounded-md hover:transform hover:scale-110 transition-transform duration-300" />
                    <img src={project.pic2Path} alt='random render' className="object-cover h-30 md:h-full md:w-4/12 shadow-md shadow-stone-800 outline-2 rounded-md hover:transform hover:scale-110 transition-transform duration-300" />
                </div>
            </div>
        </div>
    );
}

export default ThreedCard;

