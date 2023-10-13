import React from 'react';
import WritingCard from './WritingCard';
import { WritingProjects } from './WritingProjects';

const WritingBoard = ({writings}) => {

    const cardedWritings = WritingProjects.slice(1, WritingProjects.length)
    const writingCards = cardedWritings.map((project, i) => {
        return <WritingCard key={i} writing={project} />
    });

    return(
        <div className='flex flex-wrap gap-4 justify-center m-4'>
            {writingCards}
        </div>
    );
}

export default WritingBoard;