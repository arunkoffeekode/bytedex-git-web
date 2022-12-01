import React from 'react'

function ExchangeAccount() {

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

    const pass1 = () => {
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
                            <h1>Create Exchange Account</h1>
                            <p>Register with your email or mobile</p>
                            <div className='checkout-login-step mt-5'>
                                <div id="myTab1Content" class="tab-content">
                                    <div id="description" role="tabpanel" aria-labelledby="description-tab" class="tab-pane fade active show">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-12">
                                                    <input type="text" class="form-control" id="inputemail" placeholder="Enter Your Full Name" />
                                                </div>
                                                <div class="form-group col-md-12">
                                                    <input type="text" class="form-control" id="inputemail" placeholder="Enter Your Mobile Number" />
                                                </div>
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
                                                <p>Password must be no less than 7 characters including uppercase & lowercase letters</p>
                                                <div class="form-group col-md-12">
                                                    <input type="password" id="txtPassword" class="form-control"
                                                        placeholder="Confirm Password" />
                                                    <button type="button" id="btnToggle" class="toggle" onClick={pass1}>
                                                        <i id="eyeIcon" class="fa fa-eye"></i>
                                                    </button>
                                                </div>

                                                <div class="form-group col-md-12 mb-0">
                                                    <button type='button' className='forgot-btn'>Sign UP</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className='account-sign'>
                                <div className='out'>Already have an account? <a href='#'>Log in Now</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExchangeAccount