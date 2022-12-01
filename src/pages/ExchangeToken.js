import React from 'react'
import { Link } from 'react-router-dom';
function ExchangeToken() {
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
                                    <li><Link to='/referrals' href='#' className='open-btn'>My Referrals </Link></li>
                                    <li><Link to='/apikeys' href='#' className='open-btn'>Api Keys</Link></li>
                                    <li><Link to='/ExchangeToken' href='#' className='active'>Exchange Token</Link></li>
                                    <li><Link to='/Volume' href='#' className='open-btn'>Volume Discount</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='security pt-0'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>Exchange Token Fee Discount</h3>
                            <div className='right-searchbar'>
                                <button type='button' className='cancel-btn mr-0'>+ Add New Key</button>
                            </div>
                        </div>
                        <div className='col-lg-7 col-md-9 col-sm-12 col-xl-7 mt-4'>
                            <h3>Pay Trading Fees with BEXT</h3>

                            <div className='api-para'>
                                <p>When you enroll into pay with BEXT program, instead of paying trading fees in base or quote curreny, you will be paying an equivalent amount from your BEXT balance.</p>
                                <p>Your trading fee discount will be determined by the amount of BEXT that is currently held in your account.</p>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-3 col-sm-12 col-xl-5 mb-3'>
                            <div className='right-searchbar'>
                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='start-table'>
                                <table class="table">
                                    <thead>
                                        <tr style={{ borderRadius: '30px' }}>
                                            <th scope="col">Tier</th>
                                            <th scope="col">Holdings</th>
                                            <th scope="col">Discount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Shrimp </td>
                                            <td>50000 BEXT</td>
                                            <td>5%</td>
                                        </tr>
                                        <tr>
                                            <td>Crab</td>
                                            <td>150000 BEXT</td>
                                            <td>10%</td>
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

export default ExchangeToken