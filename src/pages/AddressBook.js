import React from 'react'
import { Link } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
function AddressBook() {

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
                                    <li><Link to='/addressBook' className='active'>Address Book</Link></li>
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
                            <h3>Address Book</h3>
                        </div>
                        <div className='bank-details'>
                            <div className='row'>
                                <div className='col-lg-9 col-md-8 col-xl-9 col-sm-12'>
                                    <div className='bank-name'>
                                        <p>The address book is used to save addresses that will be used for withdrawals. New addresses can be added to the addres book by filling out the 'Add Address' form.</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                    <div className='bank-btn'>
                                        <button type='button' className='add-bank'>+Add Address</button>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className='col-lg-9 col-md-8 col-xl-9 col-sm-12'>
                                    <div className='bank-name'>
                                        <p>When the whitelisting feature is enabled, you will only be able to make withdrawals to addresses already saved in your address book.</p>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-4 col-sm-12 col-xl-3'>
                                    <div className='bank-btn'>
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
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
                            <h3>Address History</h3>
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
                                            <th scope="col">Label</th>
                                            <th scope="col">Currency</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Tag/Memo</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Level 1</td>
                                            <td>BUSD</td>
                                            <td>0xd93e71166...</td>
                                            <td>1,000 BEXT</td>
                                            <td>
                                                <button type='button' className='delete'>Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Level 1</td>
                                            <td>BUSD</td>
                                            <td>0xd93e71166...</td>
                                            <td>1,000 BEXT</td>
                                            <td>
                                                <button type='button' className='delete'>Delete</button>
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

export default AddressBook