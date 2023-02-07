import React from 'react';

const ContentWrapper = ({contentList}) => {
    const contentJSX = contentList.map((content, i) => {
        if(content.layout === 'square'){
            return <img key={i} src={contentList[i].source} alt={contentList[i].caption} className="square-grid-item" />;
        }
        else if(content.layout === 'horizontal'){
            return <img key={i} src={contentList[i].source} alt={contentList[i].caption} className="horizontal-grid-item" />;
        }
        else if(content.layout === 'vertical'){
            return <img key={i} src={contentList[i].source} alt={contentList[i].caption} className="vertical-grid-item" />;
        }
        else{
            return <div key={i} className="error-grid-item" />;
        }
    });
    
    console.log(contentJSX);

    return (
        <div>
            {contentJSX}
        </div>
    );
}
 
export default ContentWrapper;