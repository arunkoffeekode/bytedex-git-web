import React from 'react';
import OwlCarousel from 'react-owl-carousel';




function Home() {

    return (
        <div>
            <section className="banner_main">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="images/slider.png" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/slider.png" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/slider.png" alt="Third slide" />
                        </div>
                    </div>
                </div>
                <div className="booking_online">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 col-sm-12 col-xl-7">
                                <div className="box">
                                    <ul id="myTab1" role="tablist" className="nav nav-tabs nav-pills">
                                        <li className="nav-item">
                                            <a id="description-tab" data-toggle="tab" href="#description" role="tab"
                                                aria-controls="description" aria-selected="false"
                                                className="nav-link  active show">Flights Booking
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a id="review-tab" data-toggle="tab" href="#review" role="tab"
                                                aria-controls="review" aria-selected="true" className="nav-link">Manage Booking</a>
                                        </li>
                                        <li className="nav-item">
                                            <a id="Status-tab" data-toggle="tab" href="#Status" role="tab"
                                                aria-controls="Status" aria-selected="true" className="nav-link">Flight Status</a>
                                        </li>
                                        <li className="nav-item">
                                            <a id="Check-tab" data-toggle="tab" href="#Check" role="tab" aria-controls="Check"
                                                aria-selected="true" className="nav-link">Web Check-In
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div id="myTab1Content" className="tab-content boook-details">
                                    <div id="description" role="tabpanel" aria-labelledby="description-tab"
                                        className="tab-pane fade show active">
                                        <div className="drp-box">
                                            <div className="left-drp">

                                                <label for="">From</label>
                                                <div className="dropdown">
                                                    <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        Delhi (DEL)
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a className="dropdown-item" href="#">Surat</a></li>
                                                        <li><a className="dropdown-item" href="#">Ahmedabad</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="box-logo">
                                                <img src="images/swap.png" alt="" />
                                            </div>
                                            <div className="right-drp">

                                                <label for="">To</label>
                                                <div className="dropdown">
                                                    <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        Select Destination
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a className="dropdown-item" href="#">Surat</a></li>
                                                        <li><a className="dropdown-item" href="#">Ahmedabad</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tirp-tab">
                                            <ul id="myTab1" role="tablist" className="nav nav-tabs nav-pills">
                                                <li className="nav-item">
                                                    <a id="description-tab" data-toggle="tab" href="#description1" role="tab"
                                                        aria-controls="description" aria-selected="true"
                                                        className="nav-link  active">One Way</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a id="review-tab" data-toggle="tab" href="#Trip" role="tab"
                                                        aria-controls="Trip" aria-selected="false" className="nav-link ">Round
                                                        Trip</a>
                                                </li>

                                            </ul>
                                        </div>
                                        <div id="myTab1Content" className="tab-content">
                                            <div id="description1" role="tabpanel" aria-labelledby="description-tab"
                                                className="tab-pane fade show active">

                                                <div className="trip">
                                                    <form>
                                                        <div className="form-row">
                                                            <div className="form-group col-md-6">
                                                                <label for="inputName">Departure Date</label>
                                                                <input type="date" className="form-control" id="inputName" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label for="inputPhone">Return Date</label>
                                                                <input type="date" className="form-control" id="inputPhone" />
                                                            </div>
                                                            <div className="form-group col-md-12">
                                                                <label for="inputPhone">Number of Passenger</label>
                                                                <select name="" id="" className="form-control">
                                                                    <option value="1" selected>01</option>
                                                                    <option value="1" selected>01</option>
                                                                    <option value="1" selected>01</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="form-group col-md-12 mt-4">
                                            <div className="sky-cloud">
                                                <img src="images/cloud-bg.png" alt="" />
                                            </div>
                                            <button type="button" className="sky-btn">Book Now</button>
                                        </div>
                                    </div>

                                    <div id="review" role="tabpanel" aria-labelledby="review-tab" className="tab-pane fade">
                                        <div className="manage-booking">
                                            <h3>View / Manage Booking</h3>
                                            <p>View, Modify or Cancel your bookings</p>
                                            <div className="trip" style={{ marginTop: '50px' }}>
                                                <form>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-12">
                                                            <label for="inputName">PNR Number / Ticket Number</label>
                                                            <input type="text" className="form-control" id="inputName"
                                                                placeholder="e.g. VA904 " />
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label for="inputPhone">Email ID / Last Name</label>
                                                            <input type="text" className="form-control" id="inputPhone"
                                                                placeholder="e.g. abc@gmail.com " />
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
                                            <div className="form-group col-md-12 mt-4">
                                                <div className="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt="" />
                                                </div>
                                                <button type="button" className="sky-btn">Search Booking</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="Check" role="tabpanel" aria-labelledby="Check-tab" className="tab-pane fade">
                                        <div className="manage-booking">
                                            <h3>Web Check-In</h3>
                                            <p>Web check-in is available for all flights and closes 60 mins prior to departure.
                                            </p>
                                            <div className="trip" style={{ marginTop: '50px' }}>
                                                <form>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-12">
                                                            <label for="inputName">PNR Number / Ticket Number</label>
                                                            <input type="text" className="form-control" id="inputName"
                                                                placeholder="e.g. VA904 " />
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label for="inputPhone">Email ID / Last Name</label>
                                                            <input type="text" className="form-control" id="inputPhone"
                                                                placeholder="e.g. abc@gmail.com " />
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
                                            <div className="form-group col-md-12 mt-4">
                                                <div className="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt="" />
                                                </div>
                                                <button type="button" className="sky-btn">Search Booking</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="Status" role="tabpanel" aria-labelledby="Status-tab" className="tab-pane fade">
                                        <div className="manage-booking">
                                            <h3>Flight Status</h3>
                                            <p>Get up-to-date flight status.
                                            </p>
                                            <div className="trip" style={{ marginTop: '50px' }}>
                                                <form>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-12">
                                                            <label for="inputName">PNR No.</label>
                                                            <input type="text" className="form-control" id="inputName"
                                                                placeholder="e.g. VA904 " />
                                                        </div>
                                                        <span className="mb-2">or</span>
                                                        <div className="form-group col-md-12">
                                                            <label for="inputPhone">Email ID/Mobile Number</label>
                                                            <input type="text" className="form-control" id="inputPhone"
                                                                placeholder="e.g. abc@gmail.com " />
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
                                            <div className="form-group col-md-12 mt-4">
                                                <div className="sky-cloud">
                                                    <img src="images/cloud-bg.png" alt="" />
                                                </div>
                                                <button type="button" className="sky-btn">Check Status</button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="searches">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div class="main-title-black">
                                <h2>Recent Searches</h2>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-xl-4 col-sm-12">
                            <div class="search-box">
                                <div class="date">
                                    01-Apr-2022
                                </div>
                                <div class="way">
                                    one way
                                </div>
                                <div class="route">
                                    <h5>Surat</h5>
                                    <a href=""><i class="fa fa-exchange" aria-hidden="true"></i></a>
                                    <h5>Ahmedabad</h5>
                                </div>
                                <span>1 Adult, 0 child, 0 infant</span>
                                <div class="btm">
                                    <div class="result">
                                        <div class="dropdown">
                                            <button type="button" class="btn btn-result dropdown-toggle"
                                                data-bs-toggle="dropdown">
                                                Show Results
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Booking</a></li>
                                                <li><a class="dropdown-item" href="#">Pending</a></li>
                                                <li><a class="dropdown-item" href="#">Booking</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="share">
                                        <ul class="wishlistShare">
                                            <li class="share-icon" style={{ position: 'relative' }}><i class="fa fa-share-alt"
                                                aria-hidden="true">
                                                <div class="shareSites">
                                                    <ul>
                                                        <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                                                        </li>
                                                        <li><a href="#" target="_blank"><i
                                                            class="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#" target="_blank"><i class="fa fa-pinterest"></i></a>
                                                        </li>
                                                        <li class="whatsup-icon"> <a href="#" target="_blank"><i
                                                            class="fa fa-whatsapp"></i></a></li>
                                                    </ul>
                                                </div>
                                            </i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-xl-4 col-sm-12">
                            <div class="search-box">
                                <div class="date">
                                    01-Apr-2022
                                </div>
                                <div class="way">
                                    one way
                                </div>
                                <div class="route">
                                    <h5>Surat</h5>
                                    <a href=""><i class="fa fa-exchange" aria-hidden="true"></i></a>
                                    <h5>Ahmedabad</h5>
                                </div>
                                <span>1 Adult, 0 child, 0 infant</span>
                                <div class="btm">
                                    <div class="result">
                                        <div class="dropdown">
                                            <button type="button" class="btn btn-result dropdown-toggle"
                                                data-bs-toggle="dropdown">
                                                Show Results
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Booking</a></li>
                                                <li><a class="dropdown-item" href="#">Pending</a></li>
                                                <li><a class="dropdown-item" href="#">Booking</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="share">
                                        <ul class="wishlistShare">
                                            <li class="share-icon" style={{ position: 'relative' }}><i class="fa fa-share-alt"
                                                aria-hidden="true">
                                                <div class="shareSites">
                                                    <ul>
                                                        <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                                                        </li>
                                                        <li><a href="#" target="_blank"><i
                                                            class="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#" target="_blank"><i class="fa fa-pinterest"></i></a>
                                                        </li>
                                                        <li class="whatsup-icon"> <a href="#" target="_blank"><i
                                                            class="fa fa-whatsapp"></i></a></li>
                                                    </ul>
                                                </div>
                                            </i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-xl-4 col-sm-12">
                            <div class="search-box">
                                <div class="date">
                                    01-Apr-2022
                                </div>
                                <div class="way">
                                    one way
                                </div>
                                <div class="route">
                                    <h5>Surat</h5>
                                    <a href=""><i class="fa fa-exchange" aria-hidden="true"></i></a>
                                    <h5>Ahmedabad</h5>
                                </div>
                                <span>1 Adult, 0 child, 0 infant</span>
                                <div class="btm">
                                    <div class="result">
                                        <div class="dropdown">
                                            <button type="button" class="btn btn-result dropdown-toggle"
                                                data-bs-toggle="dropdown">
                                                Show Results
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Booking</a></li>
                                                <li><a class="dropdown-item" href="#">Pending</a></li>
                                                <li><a class="dropdown-item" href="#">Booking</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="share">
                                        <ul class="wishlistShare">
                                            <li class="share-icon" style={{ position: 'relative' }}><i class="fa fa-share-alt"
                                                aria-hidden="true">
                                                <div class="shareSites">
                                                    <ul>
                                                        <li><a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                                                        </li>
                                                        <li><a href="#" target="_blank"><i
                                                            class="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#" target="_blank"><i class="fa fa-pinterest"></i></a>
                                                        </li>
                                                        <li class="whatsup-icon"> <a href="#" target="_blank"><i
                                                            class="fa fa-whatsapp"></i></a></li>
                                                    </ul>
                                                </div>
                                            </i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="home-page-second-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xl-12">
                            <OwlCarousel className='owl-carousel owl-theme' loop margin={10} items={4} nav >
                                <div class="item">
                                    <div class="home-page-services">
                                        <div class="icon-section">
                                            <img src="images/assist.png" alt="" />
                                        </div>
                                        <h5>Change Assist</h5>
                                        <p>(Choose alternate flight or refund for changed / cancelled flights)</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="home-page-services">
                                        <div class="icon-section">
                                            <img src="images/deals.png" alt="" />
                                        </div>
                                        <h5>Deals</h5>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit. Quisque morbi amet nisl.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="home-page-services">
                                        <div class="icon-section">
                                            <img src="images/print.png" alt="" />
                                        </div>
                                        <h5>print tickets</h5>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit. Quisque morbi amet nisl.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="home-page-services">
                                        <div class="icon-section">
                                            <img src="images/invoice.png" alt="" />
                                        </div>
                                        <h5>GST Invoice</h5>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit. Quisque morbi amet nisl.</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="home-page-services">
                                        <div class="icon-section">
                                            <img src="images/print.png" alt="" />
                                        </div>
                                        <h5>print tickets</h5>
                                        <p>Lorem ipsum dolor sit amet, adipiscing elit. Quisque morbi amet nisl.</p>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section class="charter">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-12 col-sm-12 col-xl-5">
                            <div class="main-title-black mrt">
                                <h2>Charter</h2>
                            </div>
                            <div class="sky-section">
                                <h6>Your private space in the sky</h6>
                                <p>Now book a private charter for small<br /> groups or big</p>
                            </div>
                            <div class="sky-cloud">
                                <img src="images/cloud-bg.png" alt="" />
                            </div>
                            <button type="button" class="sky-btn">Book Now</button>
                            <a href="">View all...</a>

                        </div>
                        <div class="col-lg-7 col-md-12 col-sm-12 col-xl-7">
                            <div class="frame">
                                <img src="images/chracter.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="visit">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div class="main-title-black">
                                <h2>must Visit places </h2>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
                            <div class="visit-places">
                                <img src="images/visit-1.png" alt="" />
                                <div class="location">
                                    <div class="left-section">
                                        <h6>Surat</h6>
                                        <p>From ₹2000</p>
                                    </div>
                                    <div class="right-section">
                                        <button type="button" class="wishlist">4.4 <i class="fa fa-star"
                                            aria-hidden="true"></i></button>
                                    </div>
                                </div>
                                <div class="cloud">
                                    <img src="images/cloud-bg.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
                            <div class="visit-places">
                                <img src="images/visit-2.png" alt="" />
                                <div class="location">
                                    <div class="left-section">
                                        <h6>ahmedabad</h6>
                                        <p>From ₹2000</p>
                                    </div>
                                    <div class="right-section">
                                        <button type="button" class="wishlist">4.4 <i class="fa fa-star"
                                            aria-hidden="true"></i></button>
                                    </div>
                                </div>
                                <div class="cloud">
                                    <img src="images/cloud-bg.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4">
                            <div class="visit-places">
                                <img src="images/visit-3.png" alt="" />
                                <div class="location">
                                    <div class="left-section">
                                        <h6>bhavnagar</h6>
                                        <p>From ₹2000</p>
                                    </div>
                                    <div class="right-section">
                                        <button type="button" class="wishlist">4.4 <i class="fa fa-star"
                                            aria-hidden="true"></i></button>
                                    </div>
                                </div>
                                <div class="cloud">
                                    <img src="images/cloud-bg.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="youtube">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div class="content">
                                <h5>PRIVATE CHARTERS</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fusce donec turpis in
                                    ut. Cras consectetur feugiat ridiculus amet, in est feugiat sed. A faucibus turpis dictumst
                                    et enim sit et parturient ornare. Porta pretium sem sem in ultricies tortor vel vitae diam.
                                    Aliquet tortor ac magna vitae sem purus cursus augue. Blandit vitae, nibh mattis orci massa
                                    montes. Dolor, consectetur vel nunc ut nunc morbi. Purus neque sed eu nisi vestibulum
                                    bibendum porttitor purus diam. Sit quis lectus velit est metus nec vulputate.
                                </p>
                                <p>
                                    Sed magna faucibus in mauris, egestas non amet, a. Cursus eros id purus proin tellus non.
                                    Turpis adipiscing volutpat consequat morbi elit erat nec commodo turpis. Dignissim nam amet
                                    amet neque a a ut a pellentesque. A aenean nec in tortor. Scelerisque praesent sit integer
                                    proin molestie viverra vivamus. Fusce mi porta amet.</p>
                            </div>
                            <div class="checkout-form-centre">
                                <div class="checkout-login-step">
                                    <div class="youtube-box">
                                        <a href="" target="_blank"><img src="images/video.jpg" alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="discover">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div class="main-title-black">
                                <h2>DISCOVER </h2>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                            <div class="discover-box">
                                <img src="images/discover.jpg" alt="" />
                                <h5>ahmedabad</h5>
                                <p>From ₹2000</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                            <div class="discover-box">
                                <img src="images/discover.jpg" alt="" />
                                <h5>ahmedabad</h5>
                                <p>From ₹2000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mobile-app">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xl-12 col-sm-12">
                            <div class="bx-details">
                                <h2>Deals from your favorite booking sites<br />Download our mobile app</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu id sit lectus nibh. Sed massa,
                                    imperdiet commodo consectetur commodo quam ante morbi sit. A amet consequat mi tellus nulla.
                                    Justo.</p>
                                <div class="app-img">
                                    <div class="img-section">
                                        <img src="images/desktp.png" alt="" />
                                    </div>
                                    <div class="img-barcode">
                                        <img src="images/barcode.png" alt="" />
                                        <div class="scan">
                                            <span>Scan the QR code</span>
                                            <div class="app">
                                                <a href="" class="mr-1"><img src="images/google-play.png" alt="" /></a>
                                                <a href=""><img src="images/app-store.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home