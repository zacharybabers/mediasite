import React from 'react';
import Contentponent from './Contentponent';

const ContentWrapper = ({contentList}) => {
    const contentJSX = contentList.map((content, i) => {
        return <Contentponent key={i} content={content} />
    });

    return (
        <div className='grid grid-flow-row-dense grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 place-content-evenly'>
            {contentJSX}
        </div>
    );
}
 
export default ContentWrapper;