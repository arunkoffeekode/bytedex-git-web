import React from 'react'
import { Link } from 'react-router-dom';
function Account() {

    return (
        <div>
            <div className='open-order'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='open-button'>
                                <ul>
                                    <li><Link to='/account' href='#' className='active'>Account </Link></li>
                                    <li><Link to='/accountVerification' href='#' className='open-btn'>Account Verification</Link></li>
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

            <section className='account-section pt-0'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='account-box'>
                                <div className='account-left'>
                                    <div className='client-box'>
                                        <img src='images/client.png'></img>
                                    </div>
                                    <div class="client-name">
                                        <div class="d-block mb-3">
                                            <h3>Fredi M. Allan</h3>
                                            <p>iam****@yahoo.com   |<span>User ID :256093</span></p>
                                        </div>
                                        <div className='join-date'>
                                            Joined On: <span>April 6th 2022</span> </div>
                                        <div className='join-date'> Previous login: <span>Device / WEB |</span> Date & Time: <span>2021-12-21 09:58:57 |</span> IP: <span>
                                            103.98.78.25</span></div>
                                    </div>
                                </div>
                                <div className='account-right mt-2'>
                                    <button type='button' className='account-verify'>  <img src='images/level.png'></img>Account Verified</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='withdraw-discount'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 colxl-6'>
                            <div className='withdraw-discount-white-box'>
                                <div className='box-title'>
                                    Withdrawal Limit Status:
                                </div>
                                <div className='disc-total'>
                                    0 / 0.00001 BTC
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 colxl-6'>
                            <div className='withdraw-discount-white-box'>
                                <div className='box-title'>
                                    Trading Volume Discount
                                </div>
                                <div className='disc-box'>
                                    <div className='disc-total'>
                                        0 BTC(0% Discount)
                                    </div>
                                    <div className='total-right'>
                                        0.5 BTC
                                    </div>
                                </div>
                                <div className='disc-box'>
                                    <div className='disc-total'>
                                        Tier 0
                                    </div>
                                    <div className='total-right'>
                                        Tier 1
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='road-map'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <ul class="timeline">
                                <li class="active-tl">Register Account</li>
                                <li>2FA
                                    <p>Secure your account with two-factor authentication！Verified</p>
                                </li>
                                <li>Deposit Funds
                                    <p>Add cash or crypto funds to your wallet and start trading right away</p>
                                    <button type='button' className='dpt'>Deposit</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className='security'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>Recent Login History</h3>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='start-table mb-0'>
                                <table class="table">
                                    <thead>
                                        <tr style={{ borderRadius: '30px' }}>
                                            <th scope="col">Started On</th>
                                            <th scope="col">IP address</th>
                                            <th scope="col">Operating System</th>
                                            <th scope="col">Device Name</th>
                                            <th scope="col">Last login location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2022-01-12 20:38:51</td>
                                            <td>49.36.88.187</td>
                                            <td>Chrome</td>
                                            <td>Chrome 97.0.4692.71(Windows)</td>
                                            <td>Surat, Gujarat India</td>
                                        </tr>
                                        <tr>
                                            <td>2022-01-12 20:38:51</td>
                                            <td>49.36.88.187</td>
                                            <td>Chrome</td>
                                            <td>Chrome 97.0.4692.71(Windows)</td>
                                            <td>Surat, Gujarat India</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='announcements'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='start-announcements'>
                                <h3>Announcements</h3>
                                <div className='row pt-4'>
                                    <div className='col-lg-8 col-md-9 col-xl-8 col-sm-12'>
                                        <div className='announcements-details'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at tellus, viverra a. Malesuada id felis auctor enim sociis. Consectetur nunc dictum viverra elit. Laoreet nisl elementum quis turpis proin ut imperdiet.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-3 col-xl-4 col-sm-12'>
                                        <div className='announcements-date'>
                                            <div className='date'>
                                                2022-01-10
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-8 col-md-9 col-xl-8 col-sm-12'>
                                        <div className='announcements-details'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at tellus, viverra a. Malesuada id felis auctor enim sociis. Consectetur nunc dictum viverra elit. Laoreet nisl elementum quis turpis proin ut imperdiet.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-3 col-xl-4 col-sm-12'>
                                        <div className='announcements-date'>
                                            <div className='date'>
                                                2022-01-10
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-8 col-md-9 col-xl-8 col-sm-12'>
                                        <div className='announcements-details'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at tellus, viverra a. Malesuada id felis auctor enim sociis. Consectetur nunc dictum viverra elit. Laoreet nisl elementum quis turpis proin ut imperdiet.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-4 col-md-3 col-xl-4 col-sm-12'>
                                        <div className='announcements-date'>
                                            <div className='date'>
                                                2022-01-10
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                                        <div className='announcements-btn'>
                                            <button type='button' className='anniunce-btn'>See All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Account