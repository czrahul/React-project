import React from "react";
import ReCAPTCHA from 'react-google-recaptcha'
import "./New.css"
import HomeIcon from '@mui/icons-material/Home';

let u="../home";
const handleChange = (event, value) => {
    console.log(value);
  };
const New = () => {
    return (
        <div className="Agency">
            <div className="hometag"><a href={u} style={{float:"left"}}><HomeIcon/></a></div>
            <div className="top">
                Agency Request
            </div>
            
            <div className="bottom">
                <form>
                    <div className="personal">Personal Details:</div>
                    <div className="row">
                        <div className="formInput">
                            <div className="required">
                                <label>Name</label>
                            </div>
                            <input type="text" placeholder="Name:" required/>
                        </div>

                        <div className="formInput">
                            <div className="required">
                                <label>Email</label>
                            </div>
                            <input type="email" placeholder="Email:" />
                        </div>
                        <div className="formInput">
                                <label>Website</label>
                            <input type="text" placeholder="Website:" required/>
                        </div>
                        <div className="formInput">
                            <div className="required">
                                <label>Country</label>
                            </div>
                            <input type="text" placeholder="Country:" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="formInput">
                            <div className="required">
                                <label>State</label>
                            </div>
                            <input type="text" placeholder="State:" required/>
                        </div>
                        <div className="formInput">
                            <div className="required">
                                <label>No. of Streamers</label>
                            </div>
                            <input type="number" placeholder="No. of Streamers:" required/>
                            
                        </div>
                        <div className="formInput">
                            <div className="required">
                                <label>Contact Name</label>
                            </div>
                            <input type="text" placeholder="Contact Name:" required/>
                        </div>
                        <div className="formInput">
                            <div className="required">
                                <label>Phone</label>
                            </div>
                            <input type="tel" placeholder="Phone:" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="formInput">
                            <div className="required">
                                <label>Designation</label>
                            </div>
                            <input type="text" placeholder="Designation:" required/>
                        </div>
                        <div className="formInput">
                            <div className="required">
                                <label>Experience</label>
                            </div>
                            <input type="text" placeholder="Experience:" required/>
                        </div>
                    </div>
                    <div className="bank">Bank Details:</div>
                    <div className="row">
                        <div className="formInput">
                            <div className="required">
                                <label>Account Number</label>
                            </div>
                            <input type="number" placeholder="Account Number:" required/>
                        </div>
                        <div className="formInput">
                            <div className="required">
                                <label>Account Holder Name</label>
                            </div>
                            <input type="text" placeholder="Account Holder Name:" required/>
                        </div>
                        <div className="formInput">
                            <div className="required">
                                <label>IFSC Code</label>
                            </div>
                            <input type="text" placeholder="IFSC Code:" required/>
                        </div>
                        <div className="formInput">
                            <div className="required">
                                <label>Bank Name</label>
                            </div>
                            <input type="text" placeholder="Bank Name:" required/>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default New;