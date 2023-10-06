import React from 'react';

const WritingCard = () => {
    return(
        <div className='overflow-hidden bg-white shadow-md outline outline-1 shadow-stone-500 outline-stone-400 p-2 lg:shrink-0 md:w-3/12 font-inter hover:transform hover:scale-110 transition-transform duration-300'>
            <p className='m-2'>10.13.22</p>
            <div className='flex justify-between'>
                <h1 className='text-xl m-2 font-ibm underline font-semibold'> Tears In Rain </h1>
            </div>
            <p className='m-2 mt-8'> The story of how a man overcame his nature and became something more than he could ever imagine. Watch as ties are cut, demons are slain, and life is created. Idk </p>
            <div className='flex flex-row justify-between'>
                <div className='mt-8'>
                    <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">short story</span>
                    <span className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">sci-fi</span>
                </div>
                <div className='font-bold underline text-right mt-8 mb-2 mr-2'>
                        <a href='https://github.com/zacharybabers/voxel-experimentation' target="_blank">
                            Read more...
                        </a>
                </div>
            </div>
            
        </div>
    );
}

export default WritingCard;

