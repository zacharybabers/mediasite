import React from 'react'

const PhotoAlbum = ({project}) => {

    let imageList = project.imageSources.map((photoSource, i) => {
        return(<img src={photoSource} key={i} className='hover:transform hover:scale-110 transition-transform duration-300 max-h-80'/>)
    })

    return(
        <div className='flex flex-col justify-center gap-6'>
            <p className='font-ibm text-3xl font-semibold underline'>{project.title}</p>
            <div className='flex flex-col md:flex-row md:flex-wrap gap-4'>
                {imageList}
            </div>
               
        </div>
    )
}

export default PhotoAlbum