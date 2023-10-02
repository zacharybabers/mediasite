import React from 'react';
import github from '../media/images/Github/Github.svg'

const CodeCard = () => {
    return(
        <div className='overflow-hidden p-2 lg:shrink-0 w-9/12 font-inter bg-white shadow-md outline outline-1 shadow-stone-500 outline-stone-400 hover:transform hover:scale-110 transition-transform duration-300'>
            <h1 className='underline underline-offset-2 text-xl m-2 mb-8 font-ibm font-semibold ml-6'> 3D Voxel Engine </h1>
            <div className='flex flex-col md:flex-row md:h-60 pb-6 items-center md:items-stretch'>
                <div className='ml-6 md:w-2/12 mx-2 flex flex-col justify-between'>
                     <div className='text-lg line-clamp-8 overflow-hidden'>
                        Voxel Engine developed in Unity 3D.
                    </div>
                    <div>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-8 mr-2 mb-2">C#</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Unity</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Fastnoise</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Git</span>
                        <div className='font-bold underline'>
                            <a href='https://github.com/zacharybabers/voxel-experimentation' target="_blank">
                                Github Repo <img src={github} className="social-logo inline-block" alt='github' />
                            </a>
                        </div>
                       
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-10/12 justify-center md:justify-evenly content-center'>
                    <img src='contentsource/photos/render.png' alt='random render' className="object-cover h-30 md:h-full md:w-4/12  shadow-md shadow-stone-800 outline-2 rounded-md" />
                    <img src='contentsource/photos/otherrender.jpeg' alt='random render' className="object-cover h-30 md:h-full md:w-4/12 shadow-md shadow-stone-800 outline-2 rounded-md" />
                </div>
            </div>
        </div>
    );
}

export default CodeCard;

