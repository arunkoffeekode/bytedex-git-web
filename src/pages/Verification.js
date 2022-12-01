import React from 'react'
import { Link } from 'react-router-dom';
function Verification() {
    return (
        <div>
            <div className='forgot'>
                <div className='container-fluid'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='checkout-form-centre'>
                            <h1>Verification required</h1>
                            <p>To continue, please enter OTP below to complete verification.</p>
                            <div className='checkout-login-step mt-5'>
                                <div id="myTab1Content" class="tab-content">
                                    <div id="description" role="tabpanel" aria-labelledby="description-tab" class="tab-pane fade active show">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <input type="email" class="form-control" id="inputemail" placeholder="Enter OTP" />
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
                                <div className='out'>Already have an account? <Link to='/emaillogin'>Log in Now</Link> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verification