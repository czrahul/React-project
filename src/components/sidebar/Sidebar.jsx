import React from "react";
import "./Sidebar.css"
import logo from './blue.png'
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom"


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <img alt="logo" src={logo} height={'20px'} width={'20px'} ></img>
                <span className="tagline">MiloLive</span>
            </div>
            <div className="center">
            <Link to="/home" style={{textDecoration: "none"}}>
                <li>
                    <HomeIcon/>
                    <span>Dashboard</span>
                </li>
            </Link>
            <Link to="/users" style={{textDecoration: "none"}}>
                <li>
                    <GroupIcon/>
                    <span>Host User</span>
                </li>
            </Link>
            <Link to="/users/new" style={{textDecoration: "none"}}>
                <li>
                    <AccountCircleIcon/>
                    <span>My Profile</span>
                </li>
            </Link>
            </div>
        </div>
    )
}

export default Sidebar;