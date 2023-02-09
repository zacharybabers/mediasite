import React from 'react';

const ContentWrapper = ({contentList}) => {
    const contentJSX = contentList.map((content, i) => {
        if(content.layout === 'square'){
            return <img key={i} src={contentList[i].source} alt={contentList[i].caption} className="col-span-2 row-span-2" />;
        }
        else if(content.layout === 'horizontal'){
            return <img key={i} src={contentList[i].source} alt={contentList[i].caption} className="col-span-2 row-span-1" />;
        }
        else if(content.layout === 'vertical'){
            return <img key={i} src={contentList[i].source} alt={contentList[i].caption} className="col-span-1 row-span-2" />;
        }
        else{
            return <div key={i} className="error-grid-item" />;
        }
    });
    
    console.log(contentJSX);

    return (
        <div className='grid grid-flow-row-dense grid-cols-6 grid-rows-6 gap-4 place-content-evenly'>
            {contentJSX}
        </div>
    );
}
 
export default ContentWrapper;