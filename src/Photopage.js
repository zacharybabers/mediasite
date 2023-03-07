import React from 'react';
import {content as content} from './content.js';

class Photopage extends React.Component {

    constructor(){
        super();
    }

    getImages = () => {
        return(content.filter(contentItem => contentItem.type === 'photo'));
    }

    formatImageList = (imageList) => {
        return(
            imageList.map((imageObj, i) => {
                return(<img src={imageObj.source} alt={imageObj.caption} key={i} className='shrink'/>);
            })
        );
    }
    render(){
        let imageList = this.formatImageList(this.getImages());

        return(
            <div className='justify-center flex m-4'>
                <div className='flex flex-col justify-center w-96 gap-6'>
                {imageList}
                </div>
            </div>
            
        )
    }
}

export default Photopage;