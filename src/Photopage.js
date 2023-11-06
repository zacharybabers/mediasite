import React from 'react';
import { PhotoProjects } from './PhotoProjects';
import PhotoAlbum from './photocomponents/PhotoAlbum';

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
                return(<img src={photoSource} key={i} className='hover:transform hover:scale-110 max-w-full transition-transform duration-300'/>)
            })
        )
    }
    render(){
        let albumList = PhotoProjects.map((project, i) => {
            return <PhotoAlbum project={project} key={i} />
        })

        return(
            <div className='m-10 mx-18 flex items-center flex-col space-y-5'>
                <div className='md:w-9/12'>
                    <div className='hidden md:block font-inter font-bold text-6xl'>
                        [Photographs]
                    </div>
                    <div className='block md:hidden font-inter font-bold text-6xl'>
                        [Photo]
                    </div>
                </div>
                <div className='justify-center w-9/12 flex flex-col space-y-5 m-4'>
                    {albumList}
                </div>
            </div>
        )
    }
}

export default Photopage;