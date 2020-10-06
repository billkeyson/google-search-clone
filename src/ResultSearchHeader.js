import React from "react";
import "./ResultSearchHeader.css";
import CloseIcon from "@material-ui/icons/Close";
import MicNoneIcon from "@material-ui/icons/MicNone";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import AppsIcon from "@material-ui/icons/Apps";

function ResultSearchHeader({searchword}) {
  return (
    <div className="result_header">
      <div className="result_header_google_logo">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
      </div>

      <div className="result_header_middle">
        <input defaultValue={searchword} />
        <div className="result_header_icons">
          <CloseIcon className="result_header_icons_close_border" />
          <MicNoneIcon />
          <SearchIcon />
        </div>
      </div>

      <div className="result_header_right">
        <AppsIcon style={{ cursor: "pointer" }} />
        <Avatar src="" style={{ cursor: "pointer" }} />
      </div>

    </div>
  );
}

export default ResultSearchHeader;

