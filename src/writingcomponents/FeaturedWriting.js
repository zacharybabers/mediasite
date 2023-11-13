import React from 'react';

const FeaturedWriting = ({writing}) => {
    return(
        <div className='overflow-hidden bg-white shadow-md outline outline-1 shadow-stone-500 outline-stone-400 p-2 lg:shrink-0 md:w-9/12 font-inter'>
            <p className='m-2'>{writing.date}</p>
            <div className='flex justify-between'>
                <h1 className='text-xl m-2 font-ibm underline font-semibold'> {writing.title} </h1>
            </div>
            <p className='m-2 mt-8 indent-5 text-left'> {writing.teaser} </p>
            <div className='flex flex-row justify-between'>
                <div className='mt-8'>
                    <span className="inline-block bg-gradient-to-r from-green-500 to-lime-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 md:hover:transform md:hover:scale-110 transition-transform duration-300">new</span>
                    <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 md:hover:transform md:hover:scale-110 transition-transform duration-300">{writing.writingType}</span>
                    <span className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 md:hover:transform md:hover:scale-110 transition-transform duration-300">{writing.genre}</span>
                </div>
                <div className='font-bold underline text-right mt-8 mb-2 mr-2'>
                        <a href={writing.route} className='hover:text-red-600'>
                            Read more...
                        </a>
                </div>
            </div>
            
        </div>
    );
}

export default FeaturedWriting;