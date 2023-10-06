import React from 'react';
import WritingCard from './WritingCard';

const FeaturedWriting = () => {
    return(
        <div className='overflow-hidden bg-white shadow-md outline outline-1 shadow-stone-500 outline-stone-400 p-2 lg:shrink-0 md:w-9/12 font-inter hover:transform hover:scale-110 transition-transform duration-300'>
            <p className='m-2'>10.13.22</p>
            <div className='flex justify-between'>
                <h1 className='text-xl m-2 font-ibm underline font-semibold'> Tears In Rain </h1>
            </div>
            <p className='m-2 mt-8 indent-5 text-left'> When the rain began, humanity rejoiced. Earth, its surface dried and cracked from decades of drought, was once again made to cry; the drizzle that began as a small test of Terra I, the terraforming machine intended to bring humanity beyond Earth, swiftly snowballed in intensity, developing into an unending torrent. As days of storm turned into weeks, months, and years, a flood unlike any other ravaged the planet. In a final, desperate effort to preserve their way of life, a new technological renaissance known as the Last Flourish began; mankind searched for a way to survive the endless downpour. Along with numerous other technological advancements, so too came the floating cities: humanity’s last ark on Earth’s now endless and ever deepening ocean. In 4400 AD, the city of Meridian lives on... </p>
            <div className='flex flex-row justify-between'>
                <div className='mt-8'>
                    <span className="inline-block bg-gradient-to-r from-green-500 to-lime-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">new</span>
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

export default FeaturedWriting;