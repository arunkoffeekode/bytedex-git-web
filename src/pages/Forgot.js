import React from 'react'
import { Link } from 'react-router-dom';

function Forgot() {
    return (
        <div>
            <div className='forgot'>
                <div className='container-fluid'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='checkout-form-centre'>
                            <h1>Forgot Password?</h1>
                            <p>Enter the email address or mobile phone number<br /> associated with your account.</p>
                            <div className='center-tab'>
                                <ul id="myTab1" role="tablist" class="nav nav-tabs nav-pills justify-content-center">
                                    <li class="nav-item">
                                        <a id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true" class="nav-link border active show">Email</a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false" class="nav-link border">Mobile</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='checkout-login-step mt-5'>
                                <div id="myTab1Content" class="tab-content">
                                    <div id="description" role="tabpanel" aria-labelledby="description-tab" class="tab-pane fade active show">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <input type="email" class="form-control" id="inputemail" placeholder="Enter Your Email ID" />
                                                </div>

                                                <div class="form-group col-md-12 mb-0">
                                                    <button type='button' className='forgot-btn'>Next</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <div id="review" role="tabpanel" aria-labelledby="review-tab" class="tab-pane fade">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <input type="email" class="form-control" id="inputemail" placeholder="Enter Your Mobile Number" />
                                                </div>

                                                <div class="form-group col-md-12 mb-0">
                                                    <button type='button' className='forgot-btn'>Continue</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='account-sign'>
                                <div className='out'>Already have an account?<Link to='/Emaillogin'> Log in Now</Link> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot