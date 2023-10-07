import React from 'react';

const Aboutpage = () => {
    return (
        <div className='m-10 mx-18 flex items-center flex-col space-y-5'>
            <div className='md:w-9/12'>
                <div className='font-inter font-bold text-6xl'>
                    Hi, I'm Zach.
                </div>
                <div className='font-ibm font-bold text-2xl mt-6'>
                    CS Student, Game Developer, Writer
                </div>
            </div>
            <div className='md:w-9/12 flex md:flex-row md:justify-between'>
                <div className='md:w-3/12'>
                    <div>
                        Studying software development and computer science at Washington University in St. Louis, I have an interest in webdev, gamedev, procedural generation, and learning more about different ways to apply programming in general. I also love writing, fashion, running, and animation.
                    </div>
                    <div className='mt-6'>
                        Contact: zacharybabers@gmail.com
                    </div>
                </div>
                <img src='contentsource/photos/faceshot.png' alt='me' className="object-cover h-30 md:h-full md:w-3/12 shrink shadow-md shadow-stone-800 outline-2 mr-40 rounded-md" />
            </div>
        </div>
    );
}

export default Aboutpage;