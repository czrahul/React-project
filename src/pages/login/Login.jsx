import React from "react";
import Topnav from "../../components/topnav/Topnav"
import "./login.css"
import Forget from "../../components/forget/Forget"
import {Link, useNavigate} from "react-router-dom"

let fgt="/forget"

const Login = () => {
   
    return (
        <div>
            <Topnav/>
            <h1 id="agencyProfile">Agency login</h1>
            <div className="login-page">
                <div className="formLog">
                    <form className="loginform">
                        <label for="username">Email:</label><br />
                            <input type="email" placeholder="Email" id="username" name="username" required />
                        <br/>
                        <label for="password">Password:</label><br/>
                            <input type="password" placeholder="Password" id="password" name="password" required />
                        <br/>
                        <div className="forget">
                        <a href={fgt} >
                            Forgot Password ?
                        </a>
                        </div>
                        
                        <label>
                            <input type="checkbox"  />
                            By signing in, you agree to our 
                            <a href="#" id="terms" >
                                terms and conditions
                            </a>
                        </label>
                        <br/>
                        <Link to="/home">
                        <button onclick="submit" id="SubmitButton">Submit</button><br/>
                        </Link>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login;