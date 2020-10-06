import React from 'react';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";
import ImageIcon from "@material-ui/icons/Image";
import VideocamIcon from "@material-ui/icons/Videocam";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import './ResultSearchSubHeader.css'

function ResultSearchSubHeader({changeTab}) {
  
    return (
        
      <div className="result_header_subheader">

      <div className="result_header_subheader_icon" onClick={function(e){
          e.preventDefault();
          changeTab("all")
        }
        }
          >
        <SearchOutlinedIcon />
        <span>All</span>
      </div>

      <div className="result_header_subheader_icon" onClick={(e)=>{
          e.preventDefault();
          changeTab("web")
          }}>
        <ImageIcon />
        <span>Image</span>
      </div>

      <div className="result_header_subheader_icon">
        <VideocamIcon />
        <span>Video</span>
      </div>

      <div className="result_header_subheader_icon">
        <RoomIcon />
        <span>Map</span>
      </div>

      <div className="result_header_subheader_icon">
        <NewReleasesIcon />
        <span>Map</span>
      </div>

      <div className="result_header_subheader_icon">
        <MoreVertIcon />
        <span>More</span>
      </div>
      
    </div>
    )
}

export default ResultSearchSubHeader
