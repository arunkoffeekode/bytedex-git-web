import React from 'react'
import { Link } from 'react-router-dom';

function AccountVerification() {
    return (
        <div>
            <div className='open-order'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='open-button'>
                                <ul>
                                    <li><Link to='/account' href='#' className='open-btn'>Account </Link></li>
                                    <li><Link to='/accountVerification' href='#' className='active'>Account Verification</Link></li>
                                    <li><Link to='/whitelisting' href='#' className='open-btn'>IP Whitelisting</Link></li>
                                    <li><Link to='/referrals' href='#' className='open-btn'>My Referrals </Link></li>
                                    <li><Link to='/apikeys' href='#' className='open-btn'>Api Keys</Link></li>
                                    <li><Link to='/ExchangeToken' href='#' className='open-btn'>Exchange Token</Link></li>
                                    <li><Link to='/Volume' href='#' className='open-btn'>Volume Discount</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                        <div className='verification-blue-box'>
                            <div className='flt'>
                                <h4>Your Account Identity Verification is</h4>
                            </div>
                            <div className='rlt'>
                                <button type='button' className='level'>Level 1</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-x-12'>
                        <div className='level-box'>
                            <div className='level-step'>
                                <ul>
                                    <li>
                                        <Link to='/accountVerification'><button type='button' className='step active'> <img src='images/level.png'></img>Level 1</button></Link>
                                    </li>
                                    <li>
                                        <Link to='/accountVerification2'> <button type='button' className='step'>Level 2</button></Link>
                                    </li>
                                    <li>
                                        <Link to='/accountVerification3'><button type='button' className='step'>Level 3</button></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12 col-xl-6 col-sm-12'>
                                    <div className='level-info'>
                                        <h5>Personal Information</h5>
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Full Name</label>
                                                    <input type="email" class="form-control" id="inputemail" />
                                                </div>

                                                <div class="form-group col-md-6">
                                                    <label for="inputName">Gender</label>
                                                    <select name="" id="" class="form-control">
                                                        <option value="1" selected="">Male</option>
                                                        <option value="1">Female</option>
                                                        <option value="1">Other</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputName">Marital Status</label>
                                                    <select name="" id="" class="form-control">
                                                        <option value="1" selected="">Married</option>
                                                        <option value="1">Unmarried</option>

                                                    </select>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Date of Birth</label>
                                                    <input type="date" class="form-control" id="inputemail" />
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Mobile</label>
                                                    <input type="text" class="form-control" id="inputemail" />
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Email </label>
                                                    <input type="email" class="form-control" id="inputemail" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-12 col-xl-6 col-sm-12'>
                                    <div className='level-info'>
                                        <h5>Address Information</h5>
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Nationality</label>
                                                    <select name="" id="" class="form-control">
                                                        <option value="1" selected="">India (भारत)</option>
                                                        <option value="1">UK</option>
                                                        <option value="1">Ukran</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Residential Address</label>
                                                    <input type="text" class="form-control" id="inputemail" />
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">Residential Address2</label>
                                                    <input type="text" class="form-control" id="inputemail" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputName">Pin</label>
                                                    <input type="text" class="form-control" id="inputemail" />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="inputName">City</label>
                                                    <select name="" id="" class="form-control">
                                                        <option value="1" selected="">Surat</option>
                                                        <option value="1">amhedabad</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <label for="inputName">State</label>
                                                    <select name="" id="" class="form-control">
                                                        <option value="1" selected="">Gujarat</option>
                                                        <option value="1">Maharashtra</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                                    <div className='submit-btn'>
                                        <button type='button' className='submit'>Submit</button>
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

export default AccountVerification