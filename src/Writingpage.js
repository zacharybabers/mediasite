import React from 'react';
import WritingBoard from './writingcomponents/WritingBoard';
import FeaturedWriting from './writingcomponents/FeaturedWriting';

const Writingpage = () => {
    return (
        <div className='m-10 mx-18 flex items-center flex-col space-y-5'>
            <div className='md:w-9/12'>
                <div className='font-inter font-bold text-6xl'>
                    [Writing]
                </div>
            </div>
            <FeaturedWriting />
            <WritingBoard />
        </div>
    );
}

export default Writingpage;