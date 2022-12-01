import React from 'react';
import { Link } from 'react-router-dom';

function Emaillogin() {

    const pass = () => {
        let passwordInput = document.getElementById("txtPassword"),
            toggle = document.getElementById("btnToggle"),
            icon = document.getElementById("eyeIcon");

        function togglePassword() {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                icon.classList.add("fa-eye-slash");
                //toggle.innerHTML = 'hide';
            } else {
                passwordInput.type = "password";
                icon.classList.remove("fa-eye-slash");
                //toggle.innerHTML = 'show';
            }
        }

        function checkInput() {
        }
        toggle.addEventListener("click", togglePassword, false);
        passwordInput.addEventListener("keyup", checkInput, false);
    }

    return (
        <div>
            <div className='forgot'>
                <div className='container-fluid'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='checkout-form-centre'>
                            <h1>Welcome To ByteDex</h1>
                            <p>Log In with your Email, Phone number or QR code</p>
                            <div className='center-tab'>
                                <ul id="myTab1" role="tablist" class="nav nav-tabs nav-pills justify-content-center">
                                    <li class="nav-item">
                                        <a id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true" class="nav-link border active show">Email</a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false" class="nav-link border">Mobile</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='checkout-login-step mt-5'>
                                <div id="myTab1Content" class="tab-content">
                                    <div id="description" role="tabpanel" aria-labelledby="description-tab" class="tab-pane fade active show">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <input type="email" class="form-control" id="inputemail" placeholder="Enter Your Email ID" />
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <input type="password" id="txtPassword" class="form-control"
                                                        placeholder="Password" />
                                                    <button type="button" id="btnToggle" class="toggle" onClick={pass}>
                                                        <i id="eyeIcon" class="fa fa-eye"></i>
                                                    </button>
                                                </div>
                                                <Link to='/forgot'>Forget Password?</Link>
                                                <div class="form-group col-md-12 mb-0">
                                                    <button type='button' className='forgot-btn'>Log In</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <div id="review" role="tabpanel" aria-labelledby="review-tab" class="tab-pane fade">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <input type="email" class="form-control" id="inputemail" placeholder="Enter Your Mobile Number" />
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <input type="password" id="txtPassword" class="form-control"
                                                        placeholder="Password" />
                                                    <button type="button" id="btnToggle" class="toggle" onClick={pass}>
                                                        <i id="eyeIcon" class="fa fa-eye"></i>
                                                    </button>
                                                </div>
                                                <Link to='/forgot'>Forget Password?</Link>
                                                <div class="form-group col-md-12 mb-0">
                                                    <button type='button' className='forgot-btn'>Log In</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='account-sign'>
                                <div className='out'>Don't have a Account? <a href='#'>Sign up Now</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emaillogin