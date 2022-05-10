import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.css"
import Widget from "../../components/widget/Widget"
const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                    <h1>Welcome Admin</h1>
                    <h4>Dashboard</h4>
                <div className="widgets">

                    <Widget type="HostCount"/> 
                    <Widget type="MonthlyEarning"/>
                    <Widget type="OverallEarning"/>  
                </div>
            </div>
        </div>
    )
}

export default Home;