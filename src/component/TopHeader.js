import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
function TopHeader() {
    return (
        <div>
            <section className='top-section'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12 col-sm-12 col-xl-7'>
                            <div className='drp-section'>
                                <div className='logobrand'>
                                <Link to='/'><img src='images/logo.png'></img></Link>
                                </div>
                                <div className='d-flex'>
                                    <div class="dropdown">
                                        <button class="btn drp dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src='images/avalance.png'></img> ethereum
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#"><img src='images/avalance.png'></img> ethereum</a>
                                            <a class="dropdown-item" href="#"><img src='images/avalance.png'></img> ethereum</a>
                                            <a class="dropdown-item" href="#"><img src='images/avalance.png'></img> ethereum</a>
                                        </div>
                                    </div>
                                    <div className='token-details'>ETH: $2,998.01</div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-12 col-sm-12 col-xl-5'>
                            <div class="register">
                                <div class="mobile-res">
                                    <ul>
                                        <li class="top-cart">
                                            <a href="#" id="cart" class="crl">
                                                <img src="images/bell.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <button class="btn btn-mobile" data-toggle="collapse" href="#collapseExample" role="button"
                                                aria-expanded="false" aria-controls="collapseExample">
                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                            </button>
                                        </li>
                                        <li class="top-cart">
                                            <a href="">
                                                <div class="circle">
                                                    <img src="images/client.png" alt="" />
                                                </div>
                                            </a>
                                            <div class="account-dropdown">
                                                <div class="avtar-section">
                                                    <p>Hello,<br /><span>Fredi Allan</span></p>
                                                    <div class="circle">
                                                        <img src="images/client.png" alt="" />
                                                    </div>
                                                </div>
                                                <div class="login-details">
                                                    <ul>
                                                        <li><a href="#"> <img src="images/dashboard.png" alt=""
                                                            class="lu" />Dashboard</a>
                                                        </li>
                                                        <li><Link to='/security'><img src="images/security.png" alt=""
                                                            class="lu" />Security</Link></li>
                                                        <li><Link to='/settings'><img src="images/setting-blue.png" alt=""
                                                            class="lu" />Setting
                                                        </Link>
                                                        </li>

                                                        <li>
                                                            <div class="logout">
                                                            <Link to='/emaillogin'><img src="images/logout.png" alt="" class="lu" />Logout </Link>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="desk">
                                    <ul>
                                        <li class="top-cart search">
                                            <form id="formbase">
                                                <label class="searchbox">
                                                    <input class="searchfield" type="search" checked="checked" />
                                                </label>
                                            </form>
                                        </li>
                                        <li class="top-cart">
                                            <a href="#" id="cart" class="crl">
                                                <img src="images/headphone.png" alt="" />
                                            </a>
                                        </li>
                                        <li class="top-cart">
                                            <a href="#" id="cart" class="crl">
                                                <img src="images/setting.png" alt="" />
                                            </a>
                                        </li>
                                        <li class="top-cart">
                                            <a href="#" id="cart" class="crl">
                                                <img src="images/bell.png" alt="" />
                                            </a>
                                        </li>
                                        <li class="top-cart">
                                            <a href="">
                                                <div class="circle">
                                                    <img src="images/client.png" alt="" />
                                                </div>
                                            </a>
                                            <div class="account-dropdown">
                                                <div class="avtar-section">
                                                    <p>Hello,<br /><span>Fredi Allan</span></p>
                                                    <div class="circle">
                                                        <img src="images/client.png" alt="" />
                                                    </div>
                                                </div>
                                                <div class="login-details">
                                                    <ul>
                                                        <li><a href="#"> <img src="images/dashboard.png" alt=""
                                                            class="lu" />Dashboard</a>
                                                        </li>
                                                        <li><Link to='/security'><img src="images/security.png" alt=""
                                                            class="lu" />Security </Link></li>
                                                        <li><Link to='/settings'><img src="images/setting-blue.png" alt=""
                                                            class="lu" />Setting
                                                         </Link>
                                                        </li>

                                                        <li>
                                                            <div class="logout">
                                                            <Link to='/emaillogin'><img src="images/logout.png" alt="" class="lu" />Logout</Link>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="collapse mobile-device" id="collapseExample">
                                <ul>
                                    <li class="top-cart search">
                                        <form id="formbase">
                                            <label class="searchbox">
                                                <input class="searchfield" type="search" checked="checked" />
                                            </label>
                                        </form>
                                    </li>
                                    <li class="top-cart">
                                        <a href="#" id="cart" class="crl">
                                            <img src="images/headphone.png" alt="" />
                                        </a>
                                    </li>
                                    <li class="top-cart">
                                        <a href="#" id="cart" class="crl">
                                            <img src="images/setting.png" alt="" />
                                        </a>
                                    </li>
                                    <li class="top-cart">
                                        <a href="#" id="cart" class="crl">
                                            <img src="images/light.png" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopHeader