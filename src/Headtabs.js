import React from 'react';

const Headtabs = () => {
    return(
        <div className='mt-2'>
            <ul className='hidden md:flex flex-row font-ibm justify-center align-bottom md:space-x-10 lg:space-x-20 text-xl font-light'>
                <li>life</li>
                <li>writing</li>
                <li>photo</li>
                <li>media</li>
                <li>games</li>
                <li>3D</li>
                <li>about</li>
            </ul>
        </div>
    );
}

export default Headtabs;