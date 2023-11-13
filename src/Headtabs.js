import React from 'react';

const Headtabs = () => {
    return(
        <div className='mt-2'>
            <ul className='hidden md:flex flex-col md:flex-row font-ibm justify-center items-center md:align-bottom md:space-x-10 lg:space-x-20 text-xl font-light mb-2'>
                <li><a href='/' className='hover:text-red-600'>media</a></li>
                <li><a href='/code' className='hover:text-red-600'>code</a></li>
                <li><a href='/writing' className='hover:text-red-600'>writing</a></li>
                <li><a href='/3D' className='hover:text-red-600'>3D</a></li>
                <li><a href='/photo' className='hover:text-red-600'>photo</a></li>
                <li><a href='/about' className='hover:text-red-600'>about</a></li>
            </ul>
            <ul className='flex md:hidden flex-row font-ibm justify-center space-x-14 items-center md:align-bottom md:space-x-10 lg:space-x-20 text-xl font-light mb-2'>
                <div className='flex flex-col items-center'>
                    <li><a href='/' className='hover:text-red-600'>media</a></li>
                    <li><a href='/3D' className='hover:text-red-600'>3D</a></li>
                </div>
                <div className='flex flex-col items-center'>
                    <li><a href='/writing' className='hover:text-red-600'>writing</a></li>
                    <li><a href='/code' className='hover:text-red-600'>code</a></li>
                </div>
                <div className='flex flex-col items-center'>
                    <li><a href='/photo' className='hover:text-red-600'>photo</a></li>
                    <li><a href='/about' className='hover:text-red-600'>about</a></li>
                </div>
            </ul>
        </div>
    );
}

export default Headtabs;