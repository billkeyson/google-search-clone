import React from 'react'
import './ImagesResults.css'
import ImageResult from './ImageResult';
import SearchHook from './hooks/imageSearchHook';
import ImagesResponse from './ImageResponse'

function ImageResults({query}) {
    const {data} = SearchHook(query)
    // const images = ImagesResponse;
    return (
        <div className="ImagesResults">
            {
               data && data?.items?.map( (image,index)=><ImageResult key={index} imageresp = {image}/>)
            }
            
        </div>
    )
}

export default ImageResults
