import "./forget.css"
import React from "react"
import { Link } from "react-router-dom"

const Forget = () => {
	return (
		<div class="f_row">
			<h1>Forgot Password</h1>
			<h6 class="information-text">Enter your registered email to reset your password.</h6>
			<div class="form-group">
				<input type="email" name="user_email" id="user_email" />
				<p><label for="username">Email</label></p>
				<button onclick="showSpinner()">Reset Password</button>
			</div>
			<div class="footer">
				<h5>New here? <Link to="/" style={{textDecoration: "none"}}>Sign Up.</Link></h5>
				<h5>Already have an account? <Link to="/" style={{textDecoration: "none"}}>Sign In.</Link></h5>
			</div>
		</div>
	)
}

export default Forget;