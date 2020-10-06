import React, { useState, useEffect } from "react";
import ResultSearchHeader from "./ResultSearchHeader";
import "./ResultSearchPage.css";
import SearchResult from "./SearchResult";
import ResultSearchSubHeader from "./ResultSearchSubHeader";
import { useLocation } from "react-router-dom";
import SearchHook from "./hooks/searchHook";
// import Response from './Response';
import ImageResults from "./ImageResults";

function ResultSearchPage() {
  let data = null;
  const location = useLocation();
  const [isAll, setIsAll] = useState(true);
  if (location.state?.data != undefined || location.state?.data != null) {
    data = SearchHook(
      location.state?.data != null || location.state?.data != undefined
        ? location.state?.data
        : null
    );
    data = data?.data;
  } else {
    data = null;
  }

  function change(name) {
    name == "all" ? setIsAll(true) : setIsAll(false);
  }
  return (
    <div style={{width:"1200px"}}>
      <ResultSearchHeader searchword={location.state?.data} />
      <ResultSearchSubHeader changeTab={change} />
      <div className={isAll ? `resultSearchPage` : "imageSearchResult"}>
        {isAll ? (
          <>
            <p className="searchResult_info">
              About {data && data?.searchInformation.totalResults} results (
              {data && data?.searchInformation.searchTime} seconds)
            </p>
            {data &&
              data.items.map((result, index) => (
                <SearchResult key={index} result={result} />
              ))}
          </>
        ) : (
          <ImageResults query ={location.state?.data}/>
        )}
      </div>
    </div>
  );
}

export default ResultSearchPage;
