import React from 'react';
import {content as content} from './content.js';
import { CodeProjects } from './codecomponents/CodeProjects.js';
import { WritingProjects } from './writingcomponents/WritingProjects.js';
import { ThreedProjects } from './threedcomponents/ThreedProjects.js';
import { PhotoProjects } from './PhotoProjects.js';
import ContentWrapper from './ContentWrapper.js';

class Mediagrid extends React.Component {

    constructor(){
        super();
    }

    threedToContent(threedArray){
        return(
            threedArray.map((threedObject, i) => {
                let threedContent = {
                        id: i+1,
                        caption: threedObject.title,
                        type: threedObject.contentType,
                        layout: 'horizontal',
                        source: threedObject.pic1Path,
                        pageLink: '/3D'
                    }
                if(Math.random() > 0.5){
                    threedContent.layout = 'vertical';
                    threedContent.source = threedObject.pic2Path;
                }

                return threedContent;
            })
        )
    }

    codeToContent(codeArray){
        return(
            codeArray.map((codeObject, i) => {
                let codeContent = {
                        id: i+1,
                        caption: codeObject.title,
                        type: codeObject.contentType,
                        layout: 'horizontal',
                        source: codeObject.pic1Path,
                        pageLink: '/code'
                    }
                if(Math.random() > 0.5){
                    codeContent.layout = 'vertical';
                    codeContent.source = codeObject.pic2Path;
                }

                return codeContent;
            })
        )
    }

    photoToContent(photoArray){
        return(
            photoArray.map((photoObject, i) => {
                let photoContent = {
                        id: i+1,
                        caption: photoObject.caption,
                        type: photoObject.contentType,
                        layout: photoObject.layout,
                        source: photoObject.source,
                        pageLink: '/photo'
                    }

                return photoContent;
            })
        )
    }

    aggregrateContent(){
        let contentArray = []
        contentArray = contentArray.concat(this.threedToContent(ThreedProjects))
        contentArray = contentArray.concat(this.codeToContent(CodeProjects))
        contentArray = contentArray.concat(this.photoToContent(PhotoProjects))
        return contentArray;
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
        let randomizedContent = this.getRandomizedContent(this.aggregrateContent());
    
        return(
            <div className='m-4'>
                <ContentWrapper contentList={randomizedContent} />
            </div>
        );
    }
}
export default Mediagrid;