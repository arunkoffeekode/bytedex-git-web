import React from 'react'
import './Model.css';

function TwoFactorAuth() {
    return (
        <div>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                    {/* Modal  */}
                    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Two-Factor Authentication ( Enabled )</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="form-row">
                                            <div class="form-group col-md-12 mb-3">
                                                <label for="inputName">Disable Google Authenticator</label>
                                                <input type="email" class="form-control" id="inputemail" placeholder='Input your 6 digit authenticator code ' />
                                            </div>
                                            <a href="#" style={{ color: '#2C6FE1' }}>Request code</a>
                                            <div class="form-group col-md-12 mb-0">
                                                <button type='button' className='forgot-btn'>Enable</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoFactorAuth