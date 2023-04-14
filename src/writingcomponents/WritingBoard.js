import React from 'react';
import WritingCard from './WritingCard';

const WritingBoard = () => {
    return (
        <div className='flex flex-wrap gap-4 justify-center m-4'>
            <WritingCard />
            <WritingCard />
            <WritingCard />
            <WritingCard />
            <WritingCard />
        </div>
    );
}

export default WritingBoard;