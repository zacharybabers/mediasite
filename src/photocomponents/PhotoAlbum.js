import React from 'react'

const PhotoAlbum = ({project}) => {

    let imageList = project.imageSources.map((photoSource, i) => {
        return(<img src={photoSource} key={i} className='hover:transform hover:scale-110 transition-transform duration-300'/>)
    })

    return(
        <div className='flex flex-col justify-center gap-6'>
            <p className='font-ibm text-3xl font-semibold underline'>{project.title}</p>
                {imageList}
        </div>
    )
}

export default PhotoAlbum