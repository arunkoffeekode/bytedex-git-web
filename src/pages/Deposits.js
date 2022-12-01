import React from 'react'
import { Link } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
function Deposits() {

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
    // text-copy-start
    const copy = () => {
        var copyText = document.getElementById("copyClipboard");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
    // text-copy-End
    return (
        <div>
            <div className='open-order pb-0'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='open-button'>
                                <ul>
                                    <li><Link to='/walletOverview' className='open-btn'>Overview</Link></li>
                                    <li><Link to='/deposits' className='active'>Deposits</Link></li>
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
                        <div className='bank-title'>
                            <h3>Deposits</h3>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                        <div className='deposit'>
                            <form>
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
                                <div className='form-row'>
                                    <div className='form-group col-md-12'>
                                        <label for="inputName">Deposit Network</label>
                                        <div class="input-group mb-3">
                                            <select className='form-control'>
                                                <option value="0" selected="">Bitcoin (BTC) </option>
                                                <option value="1">Bitcoin1 (BTC)</option>
                                                <option value="2">Bitcoin2 (BTC)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-group col-md-12'>
                                        <label for="inputName">Deposit Address</label>
                                        <div class="clipboard">
                                            <input onClick={copy} class="copy-input" id="copyClipboard" readonly placeholder='0x3CDFGJHKJHBFYGFFGFF55966SDFDFDSFDFDFDF5CDFFG942' />
                                            <button class="copy-btn" id="copyButton" onClick={copy}><i class="fa fa-copy" title='copied'></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                        <div className='barcode'>
                            <img src='images/qrcode.png'></img>
                            <h6>Bitcoin (BTC)</h6>
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                        <div className='deposite-info'>
                            <ul>
                                <li>Do not use this address to deposit any other asset than BTC. Deposits of other assets to this address may result in loss of funds</li>
                                <li>This is your only address for depositing BTC. Multiple deposits can be processed simultaneously.</li>
                                <li>Bitcoin will be deposited into your account once the transaction reaches 1 confirmations.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className='security'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>Deposits History</h3>
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
                                            <th scope="col">Deposited</th>
                                            <th scope="col">Deposit Amount</th>
                                            <th scope="col">Transaction Hash</th>
                                            <th scope="col">Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2022-01-12 20:38:51</td>
                                            <td>1,000 BEXT</td>
                                            <td>1,000 BEXT</td>
                                            <td>0xd93e71166...</td>
                                            <td>
                                                <button type='button' className='delete'>Completed</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2022-01-12 20:38:51</td>
                                            <td>1,000 BEXT</td>
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

export default Deposits