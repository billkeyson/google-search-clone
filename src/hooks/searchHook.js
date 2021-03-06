import React,{useEffect,useState} from 'react'
import  GOOGLE_API_KEY from '../requests/api'

const SearchHook =(query) =>{
    const custom_key = "727f04f3ed3168b6d"
    
    const [data,setData] = useState(null);
    
    useEffect(()=>{
        if (query){
        // console.log(query)
        const googleSearchUrl = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${custom_key}&q=${query}`;
        
        const  fetchSearch =async ()=>{
            fetch(googleSearchUrl)
            .then(dataResult=>dataResult.json())
            .then(dataResult=>setData(dataResult))
        }
        fetchSearch()
    }
       
    },[query])

    // console.log(data)
    return {data};
}

export default SearchHook
