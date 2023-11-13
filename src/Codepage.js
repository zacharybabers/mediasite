import React from 'react';
import CodeCard from './codecomponents/CodeCard';
import { CodeProjects } from './codecomponents/CodeProjects';

const Codepage = () => {

    const codeCards = CodeProjects.map((project, i) => {
        return <CodeCard key={i} project={project} />
    });

    return (
        <div className='m-10 mx-18 flex items-center flex-col space-y-5'>
            <div className='md:w-9/12'>
                <div className='hidden md:block font-inter font-bold text-6xl'>
                    [Coding Projects]
                </div>
                <div className='md:hidden font-inter font-bold text-6xl'>
                    [Code]
                </div>
            </div>
            {codeCards}
        </div>
       
    );
}

export default Codepage;