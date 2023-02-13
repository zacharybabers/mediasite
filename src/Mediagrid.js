import React from 'react';
import {content as content} from './content.js';
import ContentWrapper from './ContentWrapper.js';

class Mediagrid extends React.Component {

    constructor(){
        super();
    }

    shuffle = (array) => {
        let currentIndex = array.length, randomIndex;

        while(currentIndex != 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    getRandomizedContent = (contentList) => (this.shuffle(contentList));

    render(){
        //get randomized content
        let randomizedContent = this.getRandomizedContent(content);
    
        return(
            <div className='m-4'>
                <ContentWrapper contentList={randomizedContent} />
            </div>
        );
    }
}
export default Mediagrid;