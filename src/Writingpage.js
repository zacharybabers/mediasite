import React from 'react';
import WritingBoard from './writingcomponents/WritingBoard';
import FeaturedWriting from './writingcomponents/FeaturedWriting';
import { WritingProjects } from './writingcomponents/WritingProjects.js';

const Writingpage = () => {

    const featuredObject = WritingProjects[0]

    return (
        <div className='m-10 mx-18 flex items-center flex-col space-y-5'>
            <div className='md:w-9/12'>
                <div className='font-inter font-bold text-6xl'>
                    [Writing]
                </div>
            </div>
            <FeaturedWriting key={0} writing={featuredObject} />
            <WritingBoard />
        </div>
    );
}

export default Writingpage;