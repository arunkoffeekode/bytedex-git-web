import React from 'react'
import { Link } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
function Withdrawals() {

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
    //--------- Search-Bar-start------

    return (
        <div>
            <div className='open-order pb-0'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='open-button'>
                                <ul>
                                    <li><Link to='/walletOverview' className='open-btn'>Overview</Link></li>
                                    <li><Link to='/deposits' className='open-btn'>Deposits</Link></li>
                                    <li><Link to='/withdrawals' className='active'>Withdrawals</Link></li>
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
                        <div className='bank-title'>
                            <h3>Withdrawals</h3>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 col-sm-12 col-xl-5'>
                        <div className='withdraw-left'>
                            <h6>Withdrawal Limit Status: 0 / 0.00001 BTC</h6>
                            <div className='drp'>
                                <div class="dropdown">
                                    <a class="btn btn-drp dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src='images/bnb.png' style={{ width: '25px' }}></img> Bitcoin (BTC)
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="#"> <img src='images/bnb.png'></img>Bitcoin (BTC)</a>
                                        <a class="dropdown-item" href="#"> <img src='images/bnb.png'></img>Bitcoin (BTC)</a>
                                        <a class="dropdown-item" href="#"> <img src='images/bnb.png'></img>Bitcoin (BTC)</a>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>Total Balance: 1,500 BEXT</li>
                                <li>Balance In Orders: 0 BEXT</li>
                                <li> Available to withdrawal: 1,500 BEXT</li>
                            </ul>
                            <div className='paraghrph'>
                                <p>Do not withdrawal directly to an ICO or crowdfunding address, you will not receive tokens from these sales. ENABLE GOOGLE 2FA FOR WITHDRAWAL TRANSACTIONS</p>
                                <button type='button' className='bext-btn'>Fee 50 BEXT</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-7 col-md-12 col-sm-12 col-xl-7'>
                        <div className='withdraw-right'>
                            <p>You may select an address from your address book to fill in relevant fields in the form.</p>
                            <form>
                                <div className='form-row'>
                                    <div className='form-group col-md-12'>
                                        <div class="input-group mb-3 mt-3">
                                            <select className='form-control'>
                                                <option value="0" selected="">Select </option>
                                                <option value="1">20 Rows</option>
                                                <option value="2">20 Rows</option>
                                            </select>
                                            <button type="button" class="input-group-text" id="basic-addon2">+Add Address</button>
                                        </div>
                                    </div>
                                    <div className='form-group col-md-12'>
                                        <label for="inputName">BEXT Address</label>
                                        <input type="text" class="form-control radius" placeholder="BEXT Address" />
                                    </div>
                                    <div className='form-group col-md-12'>
                                        <label for="inputName">Amount</label>
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder="1450.00000000" aria-describedby="basic-addon2" />
                                            <button type="button" class="input-group-text" id="basic-addon2">1,500 BEXT</button>
                                        </div>
                                    </div>
                                    <div className='form-group col-md-12'>
                                        <label for="inputName">USD Amount</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="11.45" aria-describedby="basic-addon2" />
                                            <button type="button" class="input-group-text" id="basic-addon2">21.48 USD</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                        <div className='bank-details'>
                            <div className='row'>
                                <div className='col-lg-9 col-md-8 col-xl-9 col-sm-12'>
                                    <div className='bank-name'>
                                        <ul>
                                            <li>Service Charge: 50 BEXT ~ 0.71 USD</li>
                                            <li>You will Receive: 1,450 BEXT ~ 20.77 USD</li>
                                            <li>Balance after withdrawal: 0 BEXT ~ 0 USD</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                    <div className='bank-btn'>
                                        <button type='button' className='add-bank'>cONTINUE</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <section className='security'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>Withdrawals History</h3>
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
                                            <th scope="col">Requested</th>
                                            <th scope="col">Deposit Amount</th>
                                            <th scope="col">Transaction Hash</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2022-01-12 20:38:51</td>
                                            <td>1,000 BEXT</td>
                                            <td>0xd93e71166...</td>
                                            <td>
                                                <button type='button' className='delete'>Completed</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2022-01-12 20:38:51</td>
                                            <td>1,000 BEXT</td>
                                            <td>0xd93e71166...</td>
                                            <td>
                                                <button type='button' className='delete'>Completed</button>
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

export default Withdrawals