import React from 'react'

function Kycverification1() {
    return (
        <div>
            <div className='forgot'>
                <div className='container-fluid'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='checkout-form-centre'>
                            <h1>KYC Verification</h1>
                            <p>Complete verification to access services. Get verified to <br />
                                achieve higher trading capacity.</p>
                            <div class="section-complete">
                                <ul>
                                    <li class="active"></li>
                                    <li ></li>
                                    <li></li>
                                    <li ></li>
                                    <li></li>
                                </ul>
                            </div>

                            <div className='checkout-login-step mt-5'>
                                <div id="myTab1Content" class="tab-content">
                                    <div id="description" role="tabpanel" aria-labelledby="description-tab" class="tab-pane fade active show">
                                        <form>
                                            <div class="form-row">
                                                <h4>Personal Information</h4>
                                                <div class="form-group col-md-12">
                                                    <label for="inputPhone">Nationality</label>
                                                    <select name="" id="" class="form-control">
                                                        <option value="1" selected="">India</option>
                                                        <option value="1">Pok</option>
                                                        <option value="1">USA</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Full Name</label>
                                                    <input type="text" class="form-control" id="inputemail" />
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Date of Birth</label>
                                                    <input type="date" class="form-control" id="inputemail" />
                                                </div>
                                                <h4>Address Information</h4>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Residential Address</label>
                                                    <input type="text" class="form-control" id="inputemail" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputName">Pin</label>
                                                    <input type="text" class="form-control" id="inputemail" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputPhone">City</label>
                                                    <select name="" id="" class="form-control">
                                                        <option value="1" selected="">Surat</option>
                                                        <option value="1">Surat</option>
                                                        <option value="1">Surat</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputPhone">State</label>
                                                    <select name="" id="" class="form-control">
                                                        <option value="1" selected="">Gujrat</option>
                                                        <option value="1">Maharashtra</option>
                                                        <option value="1">Maharashtra</option>
                                                    </select>
                                                </div>

                                                <div class="form-group col-md-12 mb-0">
                                                    <button type='button' className='forgot-btn'>Continue</button>
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

export default Kycverification1