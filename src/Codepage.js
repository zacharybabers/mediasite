import React from 'react';
import CodeCard from './codecomponents/CodeCard';

const Codepage = () => {
    return (
        <div className='m-10 mx-18 flex items-center flex-col space-y-5'>
            <div className='md:w-9/12'>
                <div className='font-inter font-bold text-6xl'>
                    Coding Projects
                </div>
            </div>
            <CodeCard />
            <CodeCard />
        </div>
       
    );
}

export default Codepage;