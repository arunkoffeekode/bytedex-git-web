import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div id="navbar_top" class="header-item-center">
                <nav class="navbar navbar-default navbar-trans navbar-expand-lg">
                    <div class="container-fluid">
                        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false"
                            aria-label="Toggle navigation"> <span></span> <span></span> <span></span> </button>
                        {/* <a class="navbar-brand text-brand" href="#"></a> */}
                        <div class="navbar-collapse collapse justify-content-left" id="navbarDefault">
                            <ul class="navbar-nav">
                                <li class="nav-item"> <Link to='/' class="nav-link" href="#" title="Market"> Market </Link></li>
                                <li class="nav-item"> <Link to='/trade' class="nav-link" href="#" title="Trade">Trade</Link>
                                </li>
                                <li class="nav-item"> <a class="nav-link" href="#" title="IEO"> IEO  </a></li>
                                <li class="nav-item"> <Link to='/byteTraders' class="nav-link" href="#" title="Byte Traders"> Byte Traders
                                </Link></li>
                            </ul>
                        </div>
                        <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
                            <ul class="navbar-nav">
                                <li class="nav-item"> <a class="nav-link" href="https://stake.bytedex.io/" title="Staking"> Staking </a></li>
                                <li class="nav-item">
                                    <Link to='/account' class="nav-link" href="#" title="Account">Account  </Link>
                                </li>
                                <li class="nav-item"> <Link to='/openOrder' class="nav-link" href="#" title="Orders"> Orders </Link></li>
                                <li class="nav-item"> <Link to='/walletOverview' class="nav-link" href="#" title="Wallet"> Wallet
                                </Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header