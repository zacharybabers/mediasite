import React from 'react';
import WritingBoard from './writingcomponents/WritingBoard';
import FeaturedWriting from './writingcomponents/FeaturedWriting';

const Writingpage = () => {
    return (
        <div>
            <FeaturedWriting />
            <WritingBoard />
        </div>
    );
}

export default Writingpage;