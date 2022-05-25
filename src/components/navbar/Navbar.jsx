import React from "react";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';import "./Navbar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="items">
                    <div className="item1">
                        <NotificationsNoneOutlinedIcon/>
                    </div>
                    <div className="item2">
                        <AccountCircleIcon/>
                        <p className="para1">Hello</p>
                        <p className="para2">,Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;