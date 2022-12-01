import React from 'react'

function PhoneVerification() {
    return (
        <div>
            <div className='forgot'>
                <div className='container-fluid'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='checkout-form-centre'>
                            <div className='checkout-login-step' style={{ borderRadius: '28px' }}>
                                <div id="myTab1Content" class="tab-content">
                                    <div id="description" role="tabpanel" aria-labelledby="description-tab" class="tab-pane fade active show">
                                        <form>
                                            <div class="form-row">
                                                <h4>Phone Verification</h4>
                                                <div class="col-md-12">
                                                    <div className='phone-img'>
                                                        <img src='images/phone-verify.png'></img>
                                                    </div>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputPhone">Select Country</label>
                                                    <select name="" id="" class="form-control">
                                                        <option value="1" selected="">India</option>
                                                        <option value="1">Pok</option>
                                                        <option value="1">USA</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Mobile Number</label>
                                                    <input type="text" class="form-control" id="inputemail" />
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Mobile OTP</label>
                                                    <input type="text" class="form-control" id="inputemail" />
                                                </div>
                                                <a href="#" style={{ color: '#2C6FE1' }}>Request OTP</a>
                                                <div class="form-group col-md-12 mb-0">
                                                    <button type='button' className='forgot-btn'>Change</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneVerification