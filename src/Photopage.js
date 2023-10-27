import React from 'react';
import { PhotoProjects } from './PhotoProjects';

class Photopage extends React.Component {

    constructor(){
        super();
    }

    formatImageList = (projects) => {
        let photoArray = []
        projects.forEach((project, i) => {
            photoArray = photoArray.concat(project.imageSources)
        })

        return(
            photoArray.map((photoSource, i) => {
                return(<img src={photoSource} key={i} className='shrink hover:transform hover:scale-110 transition-transform duration-300'/>)
            })
        )
    }
    render(){
        let imageList = this.formatImageList(PhotoProjects);

        return(
            <div className='m-10 mx-18 flex items-center flex-col space-y-5'>
                <div className='md:w-9/12'>
                    <div className='font-inter font-bold text-6xl'>
                        [Photographs]
                    </div>
                </div>
                <div className='justify-center flex m-4'>
                    <div className='flex flex-col justify-center w-96 gap-6'>
                        {imageList}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Photopage;