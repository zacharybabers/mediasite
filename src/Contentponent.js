import React from 'react';


const Contentponent = ({content}) => {


    const imageStyle = {
        backgroundImage: `url(${content.source})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
      };

    if(content.layout === 'square'){
        return(
            <a href='https://www.google.com' target="_blank" rel="noopener noreferrer" className="col-span-2 row-span-2 aspect-[1/1] bg-black flex" >
                <div style={imageStyle} />
            </a>
        )
    }
    else if(content.layout === 'horizontal'){
        return(
            <a href='https://www.google.com' target="_blank" rel="noopener noreferrer" className="col-span-2 row-span-1 aspect-[2/1] bg-black flex" >
                <div style={imageStyle} />
            </a>
        )
    }
    else if(content.layout === 'vertical'){
        return(
            <a href='https://www.google.com' target="_blank" rel="noopener noreferrer" className="col-span-1 row-span-2 aspect-[1/2] bg-black flex">
                <div style={imageStyle} />
            </a>
        )
    }
    else if(content.layout === 'smallsquare'){
        return(
            <a href='https://www.google.com' target="_blank" rel="noopener noreferrer" className="col-span-1 row-span-1 aspect-[1/1] bg-black flex">
                <div style={imageStyle} />
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