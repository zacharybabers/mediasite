import React from 'react';

const WritingCard = () => {
    return(
        <div className='overflow-hidden rounded-2xl bg-slate-800 text-white p-2 lg:shrink-0 md:w-3/12 font-inter'>
            <h1 className='font-bold text-xl m-2'> Tears In Rain </h1>
            <p className='m-2 mt-8'> The story of how a man overcame his nature and became something more than he could ever imagine. Watch as ties are cut, demons are slain, and life is created. Idk </p>
            

             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-8 mr-2 mb-2">short story</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">x minute read</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">sci-fi</span>
        </div>
    );
}

export default WritingCard;

