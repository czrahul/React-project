import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import Topnav from "../../components/topnav/Topnav"
import "./login.css"
import axios from 'axios'
import {Link} from "react-router-dom"



const Login = (props) => {
    
    const [username, setUsername] =useState("");
    const [password, setPassword]=useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [logdata, setlog]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get("http://localhost:4000/").then(function(response) {
            setlog(response.data);
            console.log(logdata)
    })
}, [logdata])

    const Signin = () => {
        setError(null);
        setLoading(true);
        if(!username || !password){
            setLoading(false);
            setError("Username and password required")
        }
        else if(username !== logdata.email || password !== logdata.password){
            setLoading(false);
            setError("Wrong credentials")
        }
        else
        {
            setLoading(false);
            navigate('/home')
        }
    }
    
    

    return (
        
        <div>
            <Topnav/>
            <h1 id="agencyProfile">Agency login</h1>
            <div className="login-page">
                <div className="formLog"  >
                    <form className="loginform">
                        <label for="username">Email:</label><br />
                            <input type="email" value = {username} 
                                onChange={(e)=>setUsername(e.target.value)} 
                                placeholder="Email" id="username" 
                                name="username"  required
                            /><br/>
                        <label for="password">Password:</label><br/>
                            <input type="password" value={password} 
                                onChange={(e)=>setPassword(e.target.value)} 
                                placeholder="Password" id="password" 
                                name="password"  required
                            /><br/>

                        {error && <div className="error">{error}</div>}
                        <Link to="/forget" style= {{textDecoration: "none"}}>
                        <div className="forget">
                            Forgot Password ?
                        </div>
                        </Link>
                        
                        <label>
                            <input type="checkbox" required />
                            By signing in, you agree to our 
                            <a href="https://www.termsandcondiitionssample.com/" id="terms" >
                                terms and conditions
                            </a>
                        </label>
                        <br/>
                        
                        <input  
                            type="button"
                            onClick={Signin} 
                            value = {loading ? "Loading..." : "Submit"}
                            disabled={loading}
                            id="SubmitButton"
                            /><br/>
                        
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;
