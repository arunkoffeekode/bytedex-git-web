import React from 'react'
import { Link } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Banks() {

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
                                    <li><Link to='/withdrawals' className='open-btn'>Withdrawals</Link></li>
                                    <li><Link to='/addressBook' className='open-btn'>Address Book</Link></li>
                                    <li><Link to='/banks' className='active'>Banks</Link></li>
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
                            <h3>Banks</h3>
                        </div>
                        <div className='bank-details'>
                            <div className='bank-name'>
                                <p>Save your bank account details here.</p>
                            </div>
                            <div className='bank-btn'>
                                <button type='button' className='add-bank'>+Add Bank</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='security'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>Bank History</h3>
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
                                            <th scope="col">Name</th>
                                            <th scope="col">IFSC code</th>
                                            <th scope="col">Swift code</th>
                                            <th scope="col">Account Number</th>
                                            <th scope="col">Bank Name</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={9}>
                                                <div className='no-record'>
                                                    <img src='images/bank.png' style={{ width: '350px' }}></img>
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

export default Banks