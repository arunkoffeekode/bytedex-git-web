import React from 'react'
import { Link } from 'react-router-dom';
function Referrals() {
    return (
        <div>
            <div className='open-order'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='open-button'>
                                <ul>
                                    <li><Link to='/account' href='#' className='open-btn'>Account </Link></li>
                                    <li><Link to='/accountVerification' href='#' className='open-btn'>Account Verification</Link></li>
                                    <li><Link to='/whitelisting' href='#' className='open-btn'>IP Whitelisting</Link></li>
                                    <li><Link to='/referrals' href='#' className='active'>My Referrals </Link></li>
                                    <li><Link to='/apikeys' href='#' className='open-btn'>Api Keys</Link></li>
                                    <li><Link to='/ExchangeToken' href='#' className='open-btn'>Exchange Token</Link></li>
                                    <li><Link to='/Volume' href='#' className='open-btn'>Volume Discount</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='referral'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                            <div className='referral-first'>
                                <h1>My Referrals</h1>
                                <p>Copy and share this affiliates link with your<br /> friends when they sign up to earn bonus coins!</p>
                                <p>When your referrals invite other users to the platform you<br /> will earn a percentage of their trading fees as well!</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                            <div className='referral-second'>
                                <img src='images/referral.png'></img>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='referral-code'>
                                <div className='code'>
                                    <div className='code-name'>
                                        <p>Referral Code :</p>
                                        <div className='code-gen'>3e85d</div>
                                    </div>
                                    <button type='button' className='copy-btn'>Copy</button>
                                </div>
                                <form>
                                    <div className='form-row'>
                                        <div className='form-group col-md-12'>
                                            <div className='form-group col-md-12'>

                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" aria-describedby="basic-addon2" />
                                                    <button type="button" class="input-group-text" id="basic-addon2">Copy</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='referral-box'>
                                <h4>Referral Tiers</h4>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                        <div className='black-board'>
                                            <h3>Tier 1</h3>
                                            <div className='free-share'>
                                                Free Share: 20%
                                            </div>
                                            <div className='referral-name'>
                                                Referrals: 0
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                        <div className='black-board'>
                                            <h3>Tier 2</h3>
                                            <div className='free-share'>
                                                Free Share: 10%
                                            </div>
                                            <div className='referral-name'>
                                                Referrals: 0
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                        <div className='black-board'>
                                            <h3>Tier 3</h3>
                                            <div className='free-share'>
                                                Free Share: 40%
                                            </div>
                                            <div className='referral-name'>
                                                Referrals: 0
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='referral-box pt-0 pb-0'>
                                <h4>Referral Tiers</h4>
                                <div className='row'>
                                    <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                        <div className='black-board'>
                                            <h3>All Time</h3>
                                            <div className='free-share'>
                                                ~0 BTC</div>
                                            <div className='referral-name'>
                                                ~$0.00</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                        <div className='black-board'>
                                            <h3>Last 60 Days</h3>
                                            <div className='free-share'>
                                                ~0 BTC</div>
                                            <div className='referral-name'>
                                                ~$0.00</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                        <div className='black-board'>
                                            <h3>Last 90 Days</h3>
                                            <div className='free-share'>
                                                ~0 BTC</div>
                                            <div className='referral-name'>
                                                ~$0.00</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                        <div className='black-board'>
                                            <h3>Last 120 Days</h3>
                                            <div className='free-share'>
                                                ~0 BTC</div>
                                            <div className='referral-name'>
                                                ~$0.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='security pt-0'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>Commission</h3>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='start-table mb-0'>
                                <table class="table">
                                    <thead>
                                        <tr style={{ borderRadius: '30px' }}>
                                            <th scope="col">Credit</th>
                                            <th scope="col">Date of Transaction</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={2}>
                                                <div className='no-record'>
                                                    <img src='images/no-record.png'></img>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='security pt-0'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>Users Referred</h3>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='start-table'>
                                <table class="table">
                                    <thead>
                                        <tr style={{ borderRadius: '30px' }}>
                                            <th scope="col">Join Date</th>
                                            <th scope="col">User ID</th>
                                            <th scope="col">Referral Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={3}>
                                                <div className='no-record'>
                                                    <img src='images/no-record.png'></img>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Referrals