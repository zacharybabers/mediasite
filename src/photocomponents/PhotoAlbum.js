import React from 'react'

const PhotoAlbum = ({project}) => {

    let imageList = project.imageSources.map((photoSource, i) => {
        return(<img src={photoSource} key={i} className='hover:transform hover:scale-110 transition-transform duration-300 max-h-80 outline outline-1 outline-stone-400 shadow-stone-500 shadow-md'/>)
    })

    return(
        <div className='flex flex-col justify-center gap-6'>
            <div className='flex flex-col md:flex-row md:flex-wrap gap-4'>
                <div className='p-4 font-inter max-h-80 md:w-60 outline outline-1 outline-stone-400 shadow-stone-500 shadow-md'>
                    <p className='mb-2'>{project.date}</p>
                    <p className='font-ibm text-3xl font-semibold underline mb-4'>{project.title}</p>
                    <p>
                        {project.description}
                    </p>
                </div>
                {imageList}
            </div>
               
        </div>
    )
}

export default PhotoAlbum