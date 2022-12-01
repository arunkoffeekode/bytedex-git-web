import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import TwoFactorAuth from '../component/TwoFactorAuth';
import ChangePassModel from '../component/ChangePassModel';
function Security() {

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

    //--------- start datatable------
    createTheme('solarized', {
        text: {
            primary: '#181A20',
            secondary: '#2aa198',
        },
        background: {
            default: 'Transparent',
        },
        context: {
            background: '#cb4b16',
            text: '#181A20',
        },
        divider: {
            default: '#23323c',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.08)',
            disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');

    const columns = [
        {
            name: 'Last login time',
            selector: row => row.title,
            sortable: true,

        },
        {
            name: 'Device Name	',
            // selector: row => row.director,
            selector: row => row.title,
            sortable: true,


        },
        {
            name: 'Browser',
            selector: row => row.year,
            sortable: true,
        },
        {
            name: 'IP address',
            selector: row => row.year,
            sortable: true,
        },
        {
            name: 'OS',
            selector: row => row.year,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => row.year,
            sortable: true,
        },

    ];

    const data = [
        {
            id: 1,
            title: '2022-01-12 20:38:51',
            year: '1988',
        },
        {
            id: 2,
            title: '2022-01-12 20:38:51',
            year: '1984',
        },
        {
            id: 3,
            title: '2022-01-12 20:38:51',
            year: '2012',
        },
        {
            id: 4,
            title: '2022-04-08 17:24:52',
            year: '2081',
        },
        {
            id: 5,
            title: '2022-01-12 20:38:51',
            year: '3001',
        },
        {
            id: 6,
            title: '2022-01-12 20:38:51',
            year: '1984',
        },
        {
            id: 7,
            title: '2022-01-12 20:38:51',
            year: '902',
        },
        {
            id: 8,
            title: '2022-01-12 20:38:51',
            year: '1984',
        }
    ]
    //-------- End datatable


    return (
        <div>
            <section className='security'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>Security</h3>
                        </div>
                    </div>
                    <div className='sec-pro'>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-12 col-xl-8'>
                                <div className='protection'>
                                    <img src='images/google-authentication.png'></img>
                                    <div className='protection-details'>
                                        <h6>Google Authenticator</h6>
                                        <p>It is strongly recommended to enable Google Authenticator to protect your account.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-xl-4'>
                                <div className='enable'>
                                    <button type="button" class="enable-btn">Enable</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sec-pro'>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-12 col-xl-8'>
                                <div className='protection'>
                                    <img src='images/two-factor.png'></img>
                                    <div className='protection-details'>
                                        <h6>2-factor authentication (2FA)</h6>
                                        <p>Manage mobile and authenticator verification for login and withdrawals</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-xl-4'>
                                <div className='enable'>
                                    <button type="button" class="enable-btn" data-toggle="modal" data-target="#exampleModalCenter">Enable</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sec-pro'>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-12 col-xl-8'>
                                <div className='protection'>
                                    <img src='images/phone-verification.png'></img>
                                    <div className='protection-details'>
                                        <h6>Phone Verification</h6>
                                        <p>Manage mobile and authenticator verification for login and withdrawals</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-xl-4'>
                                <div className='enable'>
                                    <button type="button" class="enable-btn">Enable</button>
                                    <button type="button" class="enable-btn-right">Change</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sec-pro'>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-12 col-xl-8'>
                                <div className='protection'>
                                    <img src='images/email-verification.png'></img>
                                    <div className='protection-details'>
                                        <h6>Email Verification</h6>
                                        <p>Manage Email and authenticator verification for login and withdrawals</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-xl-4'>
                                <div className='enable'>
                                    <button type="button" class="enable-btn">Enable</button>
                                    <button type="button" class="enable-btn-right">Change</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sec-pro'>
                        <div className='row'>
                            <div className='col-lg-8 col-md-8 col-sm-12 col-xl-8'>
                                <div className='protection'>
                                    <img src='images/change-pass.png'></img>
                                    <div className='protection-details'>
                                        <h6>Change Password</h6>
                                        <p>Login password is used to log in to your account.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 col-xl-4'>
                                <div className='enable'>
                                    <button type="button" class="enable-btn" data-toggle="modal" data-target="#exampleModalCenter1">Change</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>Device logs</h3>
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
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='table-section'>
                                <DataTable
                                    columns={columns}
                                    theme="solarized"
                                    data={data}
                                    styling={{ borderRadius: '0px', backgroundColor: '#142028', color: "#FFF", zIndex: '1' }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <TwoFactorAuth></TwoFactorAuth>
            <ChangePassModel></ChangePassModel>

        </div>
    )
}

export default Security