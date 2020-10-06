import React from 'react';
import './App.css';
import Header from './Header';
import SearchPage from './SearchPage'
import ResultSearchPage from './ResultSearchPage'
import {Switch,Route} from 'react-router-dom';

function App() {
  (function(){
    const links = document.querySelectorAll(".result_header_subheader_icon");
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (e) => e.preventDefault());
    }

    for (let i = 0; i < links.length; i++) {
      if (links[i].parentNode.classList.contains("result_header_subheader_icon_active")) {
        links[i].parentNode.classList.remove("result_header_subheader_icon_active");
      }
      links[i].style.opacity = "0.25";
    links[1].parentNode.classList.add("result_header_subheader_icon_active");

    }
     

  })()
  return (
    <div className="app">
      <Switch>
          <Route path="/" exact>
          <Header />
            <SearchPage />
          </Route>
          <Route path="/search">
            <ResultSearchPage />
          </Route>
    
        </Switch>
      
      
    </div>
  );
}

export default App;
