import React,{useState} from 'react'
import './SearchPage.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

import {useHistory} from 'react-router-dom';

function SearchPage() {
    const [search,setSearch] =useState("");
    const history  = useHistory()


    const googleSearch = (e)=>{
        e.preventDefault();
        setSearch(e.target.value);
    }

    function navSearch(e){
        e.preventDefault();

        history.push('/search',{data:search})
    }

    return (
        <div className="search_page">
            
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
           
            <form onSubmit={(e)=>{
                e.preventDefault();
                navSearch(e)
            }} className="search_page_main_form">
            <div className="search_page_form">
                <SearchIcon />
                <input onChange={googleSearch}/>
                <MicIcon />
            </div>

            <div className="search_page_buttons">
                <input type="submit" value="Google Search" />
                <input type="submit" value="I'm Feeling Lucky"/>
            </div>

            </form>
        </div>
        
    )
}

export default SearchPage
