import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './SearchResult.css';
function SearchResult({result}) {
    return (
        <div className="searchResult">
            <div className="searchResult_left">

            <div className="searchResult_arrow_row">
    <a href={result.link} target="_blank">{result.displayLink}</a> <ArrowDropDownIcon />
            </div>
    <h3 className="searchResult_heading"><span><a href={result.link} target="_blank"> {result.title} </a></span></h3>
            <p className="searchResult_description">
            {result.snippet}
            </p>
            </div>

            <div className="searchResult_right">

            </div>
            
        </div>
    )
}

export default SearchResult
