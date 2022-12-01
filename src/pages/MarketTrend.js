import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import Usdt from '../component/Usdt';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

//Owl Carousel Settings
const options = {
    loop: true,
    dots: false,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    smartSpeed: 70,
    responsiveClass: true,
    // navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navigation: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 2,
            nav: true,
        },
        1000: {
            items: 4,
            nav: true,
            loop: true,
        },
    },
};

function MarketTrend() {

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
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="images/market-trand.png" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="images/market-trand.png" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="images/market-trand.png" alt="Third slide" />
                    </div>
                </div>
            </div>

            <section className='market-box'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <OwlCarousel className='owl-carousel owl-theme' loop margin={10} items={4} nav autoplay={true} {...options}>
                                <div className='item'>
                                    <div className='mark'>
                                        <div className='mark-left'>
                                            <div className='mark-name'>BTC/USDT</div>
                                            <p>47,014.11 +<span>1.43%</span> </p>
                                            <div className='value'>47,014.10 USD</div>
                                        </div>
                                        <div className='mark-right'>
                                            <img src='images/map.png'></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='mark'>
                                        <div className='mark-left'>
                                            <div className='mark-name'>BTC/USDT</div>
                                            <p style={{ color: "#FF5364" }}>47,014.11 +<span>1.43%</span> </p>
                                            <div className='value'>47,014.10 USD</div>
                                        </div>
                                        <div className='mark-right'>
                                            <img src='images/map1.png'></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='mark'>
                                        <div className='mark-left'>
                                            <div className='mark-name'>BTC/USDT</div>
                                            <p>47,014.11 +<span>1.43%</span> </p>
                                            <div className='value'>47,014.10 USD</div>
                                        </div>
                                        <div className='mark-right'>
                                            <img src='images/map.png'></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='mark'>
                                        <div className='mark-left'>
                                            <div className='mark-name'>BTC/USDT</div>
                                            <p>47,014.11 +<span>1.43%</span> </p>
                                            <div className='value'>47,014.10 USD</div>
                                        </div>
                                        <div className='mark-right'>
                                            <img src='images/map.png'></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='mark'>
                                        <div className='mark-left'>
                                            <div className='mark-name'>BTC/USDT</div>
                                            <p>47,014.11 +<span>1.43%</span> </p>
                                            <div className='value'>47,014.10 USD</div>
                                        </div>
                                        <div className='mark-right'>
                                            <img src='images/map.png'></img>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className='security pt-0'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <h3>Market Trend</h3>
                            <div className='right-searchbar'>
                                <ReactSearchAutocomplete
                                    items={items}
                                    onSearch={handleOnSearch}
                                    onHover={handleOnHover}
                                    onSelect={handleOnSelect}
                                    onFocus={handleOnFocus}
                                    placeholder='Search by Coin Name  '
                                    autoFocus
                                    formatResult={formatResult}
                                />
                            </div>

                        </div>
                        <div className='market-trade'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                                        <div className='market-tab'>
                                            <ul id="myTab1" role="tablist" class="nav nav-tabs nav-pills ">
                                                <li class="nav-item">
                                                    <a id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="false" class="nav-link border">USDT </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="true" class="nav-link border active show">BTC</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a id="fiat-tab" data-toggle="tab" href="#fiat" role="tab" aria-controls="fiat" aria-selected="false" class="nav-link border">FIAT</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div id="myTab1Content" class="tab-content">
                                <div id="review" role="tabpanel" aria-labelledby="review-tab" class="tab-pane fade active show">
                                    <div className='start-table' style={{ boxShadow: 'none', background: 'transparent' }}>
                                        <table class="table">
                                            <thead>
                                                <tr style={{ borderRadius: '30px' }}>
                                                    <th scope="col">Pair </th>
                                                    <th scope="col">Last Price</th>
                                                    <th scope="col">24h Change</th>
                                                    <th scope="col">24h High</th>
                                                    <th scope="col">24h Low</th>
                                                    <th scope="col">24h Volume</th>
                                                    <th scope="col">Trade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className='img-text mr-3'>
                                                            <i class="fa fa-star"></i><img src='images/bnb.png'></img>
                                                            <span style={{ fontSize: '17px' }}>BTC/USDT</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='balance'>
                                                            <div className='balance-details'>0.000820 / <a href='#'>3.27 USD</a></div>
                                                        </div>
                                                    </td>
                                                    <td style={{ color: '#FF5364' }}>-1.44%</td>
                                                    <td>0.000838</td>
                                                    <td>0.011252</td>
                                                    <td>3,996.374528 ETH</td>
                                                    <td><button type='button' className='delete'>Trade</button></td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className='img-text'>
                                                            <i class="fa fa-star-o"></i><img src='images/bnb.png'></img>
                                                            <span style={{ fontSize: '17px' }}>BTC/USDT</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='balance'>
                                                            <div className='balance-details'>0.000820 / <a href='#'>3.27 USD</a></div>
                                                        </div>
                                                    </td>
                                                    <td style={{ color: '#FF5364' }}>-1.44%</td>
                                                    <td>0.000838</td>
                                                    <td>0.011252</td>
                                                    <td>3,996.374528 ETH</td>
                                                    <td><button type='button' className='delete'>Trade</button></td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className='img-text'>
                                                            <i class="fa fa-star-o"></i><img src='images/bnb.png'></img>
                                                            <span style={{ fontSize: '17px' }}>BTC/USDT</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='balance'>
                                                            <div className='balance-details'>0.000820 / <a href='#'>3.27 USD</a></div>
                                                        </div>
                                                    </td>
                                                    <td style={{ color: '#FF5364' }}>-1.44%</td>
                                                    <td>0.000838</td>
                                                    <td>0.011252</td>
                                                    <td>3,996.374528 ETH</td>
                                                    <td><button type='button' className='delete'>Trade</button></td>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className='img-text'>
                                                            <i class="fa fa-star"></i><img src='images/bnb.png'></img>
                                                            <span style={{ fontSize: '17px' }}>BTC/USDT</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className='balance'>
                                                            <div className='balance-details'>0.000820 / <a href='#'>3.27 USD</a></div>
                                                        </div>
                                                    </td>
                                                    <td style={{ color: '#FF5364' }}>-1.44%</td>
                                                    <td>0.000838</td>
                                                    <td>0.011252</td>
                                                    <td>3,996.374528 ETH</td>
                                                    <td><button type='button' className='delete'>Trade</button></td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div id="description" role="tabpanel" aria-labelledby="description-tab" class="tab-pane fade">
                                <Usdt></Usdt>
                                </div>
                                <div id="fiat" role="tabpanel" aria-labelledby="fiat-tab" class="tab-pane fade">
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12 col-xl-12 col-sm-12'>
                            <div className='load-more'>
                                <button type='button' className='load'>Load  More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MarketTrend