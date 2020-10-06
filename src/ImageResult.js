import React from 'react'
import './ImageResult.css';

function ImageResult({imageresp}) {

    return (
        <div className="ImageResult">
            <img src={imageresp?.link}/>
            <a href="" className="ImageResult_name" target="_blank">
                {imageresp?.title}
            </a>
    <a className="ImageResult_website" target="_blank" href={imageresp?.link}>{imageresp?.displayLink}</a>
            
        </div>
    )
}

export default ImageResult
