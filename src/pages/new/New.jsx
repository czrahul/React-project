import React from "react";
import "./New.css"
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom"

const New = () => {
    return (
        <div className="Agency">
            <div className="header">
            <Link to="/home" style={{textDecoration: "none"}} >
            <div className="hometag"><HomeIcon/></div>
            </Link>
            <div className="top">
                My Profile
            </div>
            </div>
            
            <div className="bottom">
                <div className="middle">
                    <div className="personal">Personal Details:</div>
                    <div className="row">
                        <div className="formInput">
                                <label>Name <p id="required">*</p></label>
                            <div className="data">Rahul Kumar</div>
                        </div>

                        <div className="formInput">
                            
                                <label>Email <p id="required">*</p></label>
                            <div className="data">rahulkumar@gmail.com</div>
                        </div>
                        <div className="formInput">
                                <label>Website</label>
                                <div className="data">www.milolive.com</div>
                        </div>
                        <div className="formInput">
                                <label>Country <p id="required">*</p></label>
                            <div className="data">India</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="formInput">
                                <label>State <p id="required">*</p></label>
                            <div className="data">Uttar Pradesh</div>
                        </div>
                        <div className="formInput">
                                <label>No. of Streamers <p id="required">*</p></label>
                            <div className="data">5</div>
                            
                        </div>
                        <div className="formInput">
                                <label>Contact Name <p id="required">*</p></label>
                            <div className="data">Rohit Kumar</div>
                        </div>
                        <div className="formInput">
                                <label>Phone <p id="required">*</p></label>
                            <div className="data">7685901268</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="formInput">
                                <label>Designation <p id="required">*</p></label>
                            <div className="data">Manager</div>
                        </div>
                        <div className="formInput">
                                <label>Experience <p id="required">*</p></label>
                            <div className="data">5+ years</div>
                        </div>
                    </div>
                </div>
                <br/><hr/><br/>
                    <div className="bank">Bank Details:</div>
                    <div className="row">
                        <div className="formInput">
                                <label>Account Number <p id="required">*</p></label>
                            <div className="data">123456789</div>
                        </div>
                        <div className="formInput">
                                <label>Account Holder Name <p id="required">*</p></label>
                            <div className="data">Rahul Kumar</div>
                        </div>
                        <div className="formInput">
                                <label>IFSC Code <p id="required">*</p></label>
                            <div className="data">SBIN000002</div>
                        </div>
                        <div className="formInput">
                                <label>Bank Name <p id="required">*</p></label>
                            <div className="data">State Bank of India</div>
                        </div>
                    </div>
                
            </div>
            
        </div>
    )
}

export default New;