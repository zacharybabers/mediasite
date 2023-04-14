import React from 'react';
import WritingCard from './WritingCard';

const FeaturedWriting = () => {
    return(
        <div className="justify-center flex m-4">
            <div className='bg-slate-500 rounded-2xl m-4 text-white p-2 px-4 pb-4 font-inter flex flex-col content-center md:w-4/12'>
                <div className='justify-left'>
                    <h1 className=' font-bold text-4xl m-2'>Featured</h1>
                </div>
                <div className='overflow-hidden rounded-2xl bg-slate-800 text-white p-2 lg:shrink-0 font-inter m-4'>
                    <h1 className='font-bold text-xl m-2'> Tears In Rain </h1>
                    <p className='m-2 mt-8'> The story of how a man overcame his nature and became something more than he could ever imagine. Watch as ties are cut, demons are slain, and life is created. Idk </p>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-8 mr-2 mb-2">short story</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">x minute read</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">sci-fi</span>
                </div>
            </div>
        </div>
       
    );
}

export default FeaturedWriting;