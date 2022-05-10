import React from "react";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';import "./Navbar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="items">
                    <div className="item1">
                        <NotificationsNoneOutlinedIcon/>
                    </div>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <div className="item2">
                        <AccountCircleIcon/>
                        <p className="para1">Hello</p>
                        <p className="para2">,Admin</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;