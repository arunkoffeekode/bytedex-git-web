import React from 'react'
import { Link } from 'react-router-dom';
function TradeHistory() {
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
                                    <li><Link to='/tradeHistory' className='active'>Trade History</Link></li>
                                    <li><Link to='/instaTrades' className='open-btn'>Insta Trades</Link></li>
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
                            <h3>Trade History</h3>
                            <div className='right-searchbar'>
                                <div className='slt'>
                                    <form>
                                        <select>
                                            <option value="0" selected="">All</option>
                                            <option value="1">All</option>
                                            <option value="2">All</option>
                                        </select>

                                    </form>
                                    <form>
                                        <select>
                                            <option value="0" selected="">10</option>
                                            <option value="1">20</option>
                                            <option value="2">30</option>
                                        </select>
                                    </form>
                                    <button type='button' className='external-link'><i class="fa fa-external-link" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='start-table'>
                                <table class="table">
                                    <thead>
                                        <tr style={{ borderRadius: '30px' }}>
                                            <th scope="col">Date</th>
                                            <th scope="col">Pair</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Side</th>
                                            <th scope="col">Trade Price</th>
                                            <th scope="col">Size</th>
                                            <th scope="col">Executed Value</th>
                                            <th scope="col">Free</th>
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

export default TradeHistory