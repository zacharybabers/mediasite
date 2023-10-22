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
            <div className='flex-col col-span-1 row-span-1 aspect-[1/1] bg-white flex justify-between overflow-auto shadow-md outline outline-1 shadow-stone-500 outline-stone-400 p-4 lg:shrink-0 font-inter '>
                <p className="hidden md:block text-xl font-semibold font-ibm underline">{content.title}</p>
                <p className='mt-4 text-sm md:text-base'>"{content.synopsis}"</p>
                <a href={content.route} rel="noopener noreferrer" className='mt-4 hidden md:block underline font-semibold hover:text-red-600'>Click to Read</a>
            </div>
        )
    }

    if(content.layout === 'square'){
        return(
            <a href={content.pageLink} rel="noopener noreferrer" className="col-span-2 row-span-2 aspect-[1/1] bg-transparent flex" >
                <div className='bg-cover hover:bg-no-repeat bg-white bg-opacity-0' style={imageStyle} />
            </a>
        )
    }
    else if(content.layout === 'horizontal'){
        return(
            <a href={content.pageLink} rel="noopener noreferrer" className="col-span-2 row-span-1 aspect-[2/1] bg-transparent flex" >
                <div className='bg-cover hover:bg-no-repeat bg-white bg-opacity-0' style={imageStyle} />
            </a>
        )
    }
    else if(content.layout === 'vertical'){
        return(
            <a href={content.pageLink} rel="noopener noreferrer" className="col-span-1 row-span-2 aspect-[1/2.05] bg-transparent flex">
                <div className='bg-cover hover:bg-no-repeat bg-white bg-opacity-0' style={imageStyle} />
            </a>
        )
    }
    else if(content.layout === 'smallsquare'){
        return(
            <a href={content.pageLink} rel="noopener noreferrer" className="col-span-1 row-span-1 aspect-[1/1] bg-transparent flex">
                <div className='bg-cover hover:bg-no-repeat bg-white bg-opacity-0'style={imageStyle} />
            </a>
        )
    }
    else{
        return(
            <div>
                Broken content layout :/
            </div>
        )
    }
       
   
}

export default Contentponent;