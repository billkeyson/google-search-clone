import React from 'react'
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import AppsIcon from '@material-ui/icons/Apps';
function Header() {
    return (
        <div className="header">
            
            <div className="header_options"><a href="#">Gmail</a> </div>     
                <div className="header_options"><a href="#">Images</a> </div>     
                <div className="header_options"><AppsIcon style={{cursor:"pointer"}}/></div>     
                <div className="header_options"><Avatar src= "https://lh3.googleusercontent.com/ogw/ADGmqu8e_fPvREoycB1AGMdSge49mjfsf-YgkAhemqOb=s32-c-mo" style={{cursor:"pointer"}}/>    </div>               
        </div>
    )
}

export default Header
