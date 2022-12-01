import React from 'react'

function TokenLauncher() {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="images/banner.png" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="images/banner.png" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="images/banner.png" alt="Third slide" />
                    </div>
                </div>
            </div>
            <section className='token-launch'>
                <div className='container'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='launch'>
                            <div className='launch-step'>
                                <div className='launch-title'>
                                    <h2>Token Launcher</h2>
                                </div>
                                <div className='launch-details'>
                                    <p>1 USDT roughly equals</p>
                                    <h3>0.0432281 AVAX</h3>
                                    <div className='usdt-avex-details'>
                                        <div className='name-used'>
                                            You have:
                                        </div>
                                        <div className='used'>0 AVAX 0 USDT</div>
                                    </div>
                                    <form>
                                        <div className='form-row'>
                                            <div className='form-group col-md-12'>
                                                <label for="inputName">Payment Amount</label>
                                                <p>Spend between 10 and 10000000 AVAX</p>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="0.0000000" aria-describedby="basic-addon2" />
                                                    <div class="dropdown input-group-text" id="basic-addon2">
                                                        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <img src='images/avalance.png'></img> Avax
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#"><img src='images/avalance.png'></img> USDT</a>
                                                            <a class="dropdown-item" href="#"><img src='images/avalance.png'></img> USDT</a>
                                                            <a class="dropdown-item" href="#"><img src='images/avalance.png'></img> USDT</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='form-group col-md-12'>
                                                <label for="inputName">Total Received</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="0.0000000" aria-describedby="basic-addon2" />
                                                    <div class="dropdown input-group-text" id="basic-addon2">
                                                        <button class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <img src='images/usdt.png'></img> USDT
                                                        </button>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#"><img src='images/avalance.png'></img> USDT</a>
                                                            <a class="dropdown-item" href="#"><img src='images/avalance.png'></img> USDT</a>
                                                            <a class="dropdown-item" href="#"><img src='images/avalance.png'></img> USDT</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='form-group col-md-12'>
                                                <p>This amount is an estimate after fees are collected.</p>
                                            </div>
                                            <div className='form-group col-md-12'>
                                                <div className='buy-btn'>
                                                    <button type='button' className='buy'> buy usdt</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TokenLauncher