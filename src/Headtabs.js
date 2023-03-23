import React from 'react';

const Headtabs = () => {
    return(
        <div className='mt-4'>
            <ul className='hidden md:flex flex-row font-ibm justify-center align-bottom md:space-x-10 lg:space-x-20 text-xl font-light'>
                <li><a href='/' className='hover:text-red-600'>media</a></li>
                <li><a href='/games' className='hover:text-red-600'>games</a></li>
                <li><a href='/writing' className='hover:text-red-600'>writing</a></li>
                <li><a href='/3D' className='hover:text-red-600'>3D</a></li>
                <li><a href='/photo' className='hover:text-red-600'>photo</a></li>
                <li><a href='/about' className='hover:text-red-600'>about</a></li>
            </ul>
        </div>
    );
}

export default Headtabs;