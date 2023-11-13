import React from 'react';


const Contentponent = ({content}) => {


    const imageStyle = {
        backgroundImage: `url(${content.source})`,
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      };
    
    if(content.type === 'writing'){
        return(
            <div className='flex-col col-span-1 row-span-1 aspect-[1/1] bg-white flex justify-center md:justify-between items-center md:items-start overflow-auto shadow-md outline outline-1 shadow-stone-500 outline-stone-400 pt-2 pb-2 md:p-4 lg:shrink-0 font-inter '>
                <p className="block text-md text-center md:text-left md:text-xl font-semibold font-ibm underline">{content.title}</p>
                <p className='hidden md:block mt-4 text-sm md:text-base'>"{content.synopsis}"</p>
                <div className='md:flex mt-4 space-x-2 justify-between'>
                    <span className='inline-block text-xs md:text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-center rounded-full px-3 py-1 font-semibold text-white'>{content.genre}</span>
                    <a href={content.route} rel="noopener noreferrer" className='hidden md:inline-block underline font-semibold hover:text-red-600'>Click to Read</a>
                </div>
                
            </div>
        )
    }

    if(content.type === 'splash'){
        return(
            <a href={content.pageLink} rel="noopener noreferrer" className="col-span-2 row-span-2 aspect-[1/1] bg-transparent flex shadow-md outline-1 shadow-stone-500 outline-stone-400" >
                <div className='bg-cover hover:bg-no-repeat bg-white bg-opacity-0' style={imageStyle}>
                </div>
            </a>
        )
    }

    if(content.layout === 'square'){
        return(
            <a href={content.pageLink} rel="noopener noreferrer" className="col-span-2 row-span-2 aspect-[1/1] bg-transparent flex shadow-md outline-1 shadow-stone-500 outline-stone-400" >
                <div className='bg-cover hover:bg-no-repeat bg-white bg-opacity-0' style={imageStyle}>
                    <div className='opacity-0 hover:opacity-100 bg-black flex flex-col justify-center items-center bg-opacity-60 text-white h-full w-full'>
                        <p className='font-ibm font-semibold text-xl'>{content.caption}</p>
                        <p className='font-inter text-xs'> click for more </p>
                    </div>
                </div>
            </a>
        )
    }
    else if(content.layout === 'horizontal'){
        return(
            <a href={content.pageLink} rel="noopener noreferrer" className="col-span-2 row-span-1 aspect-[2/1] bg-transparent flex shadow-md outline-1 shadow-stone-500 outline-stone-400" >
                <div className='bg-cover hover:bg-no-repeat bg-white bg-opacity-0' style={imageStyle}>
                    <div className='opacity-0 hover:opacity-100 bg-black flex flex-col justify-center items-center bg-opacity-60 text-white h-full w-full'>
                        <p className='font-ibm font-semibold text-xl'>{content.caption}</p>
                        <p className='font-inter text-xs'> click for more </p>
                    </div>
                </div>
            </a>
        )
    }
    else if(content.layout === 'vertical'){
        return(
            <a href={content.pageLink} rel="noopener noreferrer" className="col-span-1 row-span-2 aspect-[1/2.05] bg-transparent flex shadow-md outline-1 shadow-stone-500 outline-stone-400">
                <div className='bg-cover hover:bg-no-repeat bg-white bg-opacity-0' style={imageStyle}>
                    <div className='opacity-0 hover:opacity-100 bg-black flex flex-col justify-center items-center bg-opacity-60 text-white h-full w-full'>
                        <p className='font-ibm font-semibold text-xl'>{content.caption}</p>
                        <p className='font-inter text-xs'> click for more </p>
                    </div>
                </div>
            </a>
        )
    }
    else if(content.layout === 'smallsquare'){
        return(
            <a href={content.pageLink} rel="noopener noreferrer" className="col-span-1 row-span-1 aspect-[1/1] bg-transparent flex shadow-md outline-1 shadow-stone-500 outline-stone-400">
                <div className='bg-cover hover:bg-no-repeat bg-white bg-opacity-0' style={imageStyle}>
                    <div className='opacity-0 hover:opacity-100 bg-black flex flex-col justify-center items-center bg-opacity-60 text-white h-full w-full'>
                        <p className='font-ibm font-semibold text-xl'>{content.caption}</p>
                        <p className='font-inter text-xs'> click for more </p>
                    </div>
                </div>
            </a>
        )
    }
    else{
        return(
            <div>
                Broken content layout :/: {content.layout}
            </div>
        )
    }
       
   
}

export default Contentponent;