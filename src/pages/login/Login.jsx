import React, { useState} from "react";
import { useNavigate } from "react-router-dom"
import Topnav from "../../components/topnav/Topnav"
import "./login.css"
import axios from 'axios'
import {setUserSession } from "../../Utils/Common"

let fgt="/forget"



const Login = (props) => {
    
    const [username, setUsername] =useState("");
    const [password, setPassword]=useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const Signin = () => {
        setError(null);
        setLoading(true);
        axios.post("http://localhost:4000/users/signin", {
            username: username,
            password: password
        }).then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            navigate('/home')
        }).catch(error => {
            setLoading(false);
            if(error.response.status === 401 || error.response.status === 400) {
                setError(error.response.data.message);
            }
            else {
                setError("Something went wrong. Please try again later.");
            }
        });
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
                        
                        <div className="forget">
                        <a href={fgt} >Forgot Password ?</a>
                        </div>
                        
                        <label>
                            <input type="checkbox" required />
                            By signing in, you agree to our 
                            <a href="#" id="terms" >
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