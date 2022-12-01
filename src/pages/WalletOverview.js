import React from 'react'
import { Link } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function WalletOverview() {

    // --------- Search-Bar-start
    const items = [
        {
            id: 0,
            name: 'Cobol'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Basic'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ]

    const handleOnSearch = (string, results) => {
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        console.log(result)
    }

    const handleOnSelect = (item) => {
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }
    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            </>
        )
    }
    //--------- Search-Bar-End------

    return (
        <div>
            <div className='open-order'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='open-button'>
                                <ul>
                                    <li><Link to='/walletOverview' className='active'>Overview</Link></li>
                                    <li><Link to='/deposits' className='open-btn'>Deposits</Link></li>
                                    <li><Link to='/withdrawals' className='open-btn'>Withdrawals</Link></li>
                                    <li><Link to='/addressBook' className='open-btn'>Address Book</Link></li>
                                    <li><Link to='/banks' className='open-btn'>Banks</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                        <div className='wallet-overview'>
                            <h3>Wallet Overview</h3>
                            <div className='row'>
                                <div className='col-lg-8 col-md-12 col-xl-8 col-sm-12'>
                                    <div className='account-balance'>
                                        <p>Account balance: </p>
                                        <div className='balance-ac'>
                                            0.00104336 BTC
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-12 col-xl-4 col-sm-12'>
                                    <div className='account-balance1'>
                                        <div className='estimated-value'>≈ $0.00 <span>Estimated Value</span></div>
                                        <div className='estimated-value mb-0'>0.00001 BTC <span>Withdrawal Limit</span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <section className='security pt-3'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked />
                                <label class="form-check-label" for="inlineRadio1">Hide balance?</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label class="form-check-label" for="inlineRadio2">Hide low balance?</label>
                            </div>
                            <div className='right-searchbar'>
                                <button type='button' className='external-link'><i class="fa fa-external-link" aria-hidden="true"></i></button>
                                <ReactSearchAutocomplete
                                    items={items}
                                    onSearch={handleOnSearch}
                                    onHover={handleOnHover}
                                    onSelect={handleOnSelect}
                                    onFocus={handleOnFocus}
                                    placeholder='Search '
                                    autoFocus
                                    formatResult={formatResult}
                                />
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='start-table'>
                                <table class="table">
                                    <thead>
                                        <tr style={{ borderRadius: '30px' }}>
                                            <th scope="col">Currency</th>
                                            <th scope="col">Balance</th>
                                            <th scope="col">In Order</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='img-text'>
                                                    <img src='images/bnb.png'></img>
                                                    <span>BTC/USDT</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='balance'>
                                                    <div className='name'>1,500 BEXT</div>
                                                    <div className='balance-details'>0.000820 BTC / <a href='#'>3.27 USD</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='balance'>
                                                    <div className='name'>0 BEXT</div>
                                                    <div className='balance-details'>3.27 USD</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='balance'>
                                                    <div className='name'>1,500 BEXT</div>
                                                    <div className='balance-details'>0.000820 BTC / <a href='#'>3.27 USD</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">Deposit</a></li>
                                                        <li><a class="dropdown-item" href="#">Withdraw</a></li>
                                                        <li><a class="dropdown-item" href="#">Trade</a></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='img-text'>
                                                    <img src='images/bnb.png'></img>
                                                    <span>BTC/USDT</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='balance'>
                                                    <div className='name'>1,500 BEXT</div>
                                                    <div className='balance-details'>0.000820 BTC / <a href='#'>3.27 USD</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='balance'>
                                                    <div className='name'>0 BEXT</div>
                                                    <div className='balance-details'>3.27 USD</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='balance'>
                                                    <div className='name'>1,500 BEXT</div>
                                                    <div className='balance-details'>0.000820 BTC / <a href='#'>3.27 USD</a></div>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">Deposit</a></li>
                                                        <li><a class="dropdown-item" href="#">Withdraw</a></li>
                                                        <li><a class="dropdown-item" href="#">Trade</a></li>
                                                    </ul>
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

export default WalletOverview