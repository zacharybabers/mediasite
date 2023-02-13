import React from 'react';


const Contentponent = ({content}) => {
    if(content.layout === 'square'){
        return(
            <div  className="col-span-2 row-span-2 bg-black flex" >
                <img src={content.source} alt={content.caption} className="grow" />
            </div>
        )
    }
    else if(content.layout === 'horizontal'){
        return(
            <div className="col-span-2 row-span-1 bg-black flex" >
                <img src={content.source} alt={content.caption} className="grow" />
            </div>
        )
    }
    else if(content.layout === 'vertical'){
        return(
            <div className="col-span-1 row-span-2 bg-black flex just">
                <img src={content.source} alt={content.caption} className="grow" />
            </div>
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