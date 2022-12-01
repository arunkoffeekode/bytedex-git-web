import React from 'react'
import { Link } from 'react-router-dom';
function InstaTrades() {
    return (
        <div>
            <div className='open-order'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='open-button'>
                                <ul>
                                    <li><Link to='/openOrder' className='open-btn'>Open Orders</Link></li>
                                    <li><Link to='/orderHistory' className='open-btn'>Order History</Link></li>
                                    <li><Link to='/tradeHistory' className='open-btn'>Trade History</Link></li>
                                    <li><Link to='/instaTrades' className='active'>Insta Trades</Link></li>
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
                            <h3>Insta Trades</h3>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='start-table'>
                                <table class="table">
                                    <thead>
                                        <tr style={{ borderRadius: '30px' }}>
                                            <th scope="col">Date</th>
                                            <th scope="col">Amount Purchased</th>
                                            <th scope="col">Amount Spent</th>
                                            <th scope="col">Price w/fees</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={8}>
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

export default InstaTrades