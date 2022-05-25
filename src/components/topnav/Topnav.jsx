import "./topnav.css"
import Logo from "./blue.png"
import NotificationsIcon from '@mui/icons-material/Notifications';
import CallIcon from '@mui/icons-material/Call';

const Topnav = () => {
    return (
        <div class="topnav">
            <div className="left">
                <div class="LoGo">
                    <img src={Logo} alt="logo" height="20px" width="20px" />
                
                <a id="milo" class="active" href="#home">MiloLive</a>
            </div>
            </div>
            <div class="contact">
                <div className="call" >
                    <CallIcon /> <p>+1 999 999 999</p>
                </div>
                <NotificationsIcon />
                <button id="language" >Eng</button>
            </div>
        </div>

    )
}

export default Topnav;