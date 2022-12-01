import React from 'react'
import { Link } from 'react-router-dom';
import Ipaddress from '../component/Ipaddress'
function Whitelisting() {
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
                                    <li><Link to='/whitelisting' href='#' className='active'>IP Whitelisting</Link></li>
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
            <section className='security pt-0'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>IP Whitelisting</h3>
                            <div className='right-searchbar'>
                                <button type='button' className='cancel-btn mr-0' data-toggle="modal" data-target="#exampleModalCenter1">+ Add IP Address</button>
                                <Ipaddress></Ipaddress>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='start-table'>
                                <table class="table">
                                    <thead>
                                        <tr style={{ borderRadius: '30px' }}>
                                            <th scope="col">IP Addresses</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
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

export default Whitelisting