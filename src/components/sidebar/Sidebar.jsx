import React from "react";
import {useNavigate} from "react-router-dom"
import "./Sidebar.css"
import logo from './blue.png'
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';
import { removeUserSession } from "../../Utils/Common";


const Sidebar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        removeUserSession();
        navigate('/');
    }


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
            <li>
                    <LogoutIcon/>
                    <span>
                    <input 
                        type="button"
                        value="Logout"
                        onClick={handleLogout}
                        style={{textDecoration: "none"} }
                        id = "logout"
                    />
                    </span>
                </li>
            </div>
        </div>
    )
}

export default Sidebar;