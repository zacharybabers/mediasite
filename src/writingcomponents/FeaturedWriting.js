import React from 'react';

const FeaturedWriting = () => {
    return(
        <div className='bg-slate-500 rounded-2xl m-4 text-white p-2 font-inter'>
            <h1 className='underline font-bold text-4xl m-2'>Featured Writing</h1>
            <h2 className='mt-8 m-2 text-xl font-bold'>Tears In Rain</h2>
            <p className='m-2 mt-8'> The story of how a man overcame his nature and became something more than he could ever imagine. Watch as ties are cut, demons are slain, and life is created. Idk </p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-8 mr-2 mb-2">short story</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">x minute read</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">sci-fi</span>

        </div>
    );
}

export default FeaturedWriting;