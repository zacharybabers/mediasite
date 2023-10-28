import React from 'react';
import {content as content} from './content.js';
import { SplashImage } from './SplashImage.js';
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
        let contentArray = []
        threedArray.forEach((project, i) => {
            if(project.media1){
                let threedContent = {
                    id: i+1,
                    caption: project.title,
                    type: project.contentType,
                    layout: project.layout1,
                    source: project.pic1Path,
                    pageLink: '/3D'
                }
                contentArray.push(threedContent)
            }
            if(project.media2){
                let threedContent = {
                    id: i+1,
                    caption: project.title,
                    type: project.contentType,
                    layout: project.layout2,
                    source: project.pic2Path,
                    pageLink: '/3D'
                }
                contentArray.push(threedContent)
            }
        });
        return contentArray
    }

    codeToContent(codeArray){
        let contentArray = []
        codeArray.forEach((project, i) => {
            if(project.media1){
                let threedContent = {
                    id: i+1,
                    caption: project.title,
                    type: project.contentType,
                    layout: project.layout1,
                    source: project.pic1Path,
                    pageLink: '/code'
                }
                contentArray.push(threedContent)
            }
            if(project.media2){
                let threedContent = {
                    id: i+1,
                    caption: project.title,
                    type: project.contentType,
                    layout: project.layout2,
                    source: project.pic2Path,
                    pageLink: '/code'
                }
                contentArray.push(threedContent)
            }
        });
        return contentArray
    }

    photoToContent(initArray){
        let photoArray = this.shuffle(initArray)
        let contentArray = []
        let gotSplash = false
        photoArray.forEach((photoObject, i) => {
            photoObject.layouts.forEach((layout, j) => {
                let isSplash = SplashImage.includes(photoObject.imageSources[j])
                if(layout !== 'none' && !(gotSplash && isSplash)){
                    let photoContent = {
                        id: i * j + 1,
                        caption: photoObject.title,
                        type: photoObject.contentType,
                        layout: layout,
                        source: photoObject.imageSources[j],
                        pageLink: '/photo'
                    }
                    contentArray.push(photoContent)
                }
                if(isSplash && !gotSplash){
                    gotSplash = true
                }
            })
        })
        return contentArray
    }

    writingToContent(writingArray){
        return(
            writingArray.map((writingObject, i) => {
                let writingContent = {
                    id: i+1,
                    type: writingObject.contentType,
                    title: writingObject.title,
                    synopsis: writingObject.synopsis,
                    teaser: writingObject.teaser,
                    date: writingObject.date,
                    route: writingObject.route,
                    writingType: writingObject.writingType,
                    genre: writingObject.genre,
                }

                return writingContent
            })
        )
    }

    aggregrateContent(){
        let contentArray = []
        contentArray = contentArray.concat(this.threedToContent(ThreedProjects))
        contentArray = contentArray.concat(this.codeToContent(CodeProjects))
        contentArray = contentArray.concat(this.photoToContent(PhotoProjects))
        contentArray = contentArray.concat(this.writingToContent(WritingProjects))
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

    getRandomizedContent = (contentList) => {
        return (this.shuffle(contentList));
    }

    render(){
        //get randomized content
        let randomizedContent = this.getRandomizedContent(this.aggregrateContent());
        
        randomizedContent.forEach((content, i) => {
            if(SplashImage.includes(content.source)){
                let temp = randomizedContent[0]
                randomizedContent[0] = content
                randomizedContent[i] = temp
            }
        })
    
        return(
            <div className='m-4'>
                <ContentWrapper contentList={randomizedContent} />
            </div>
        );
    }
}
export default Mediagrid;