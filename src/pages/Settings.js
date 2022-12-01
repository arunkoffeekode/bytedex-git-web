import React from 'react'

function Settings() {
    return (
        <div>
            <section className='setting'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='setting-title'>
                                <h3>Settings</h3>
                            </div>
                            <div className='setting-box'>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputPhone" className='lbl'>Number Format</label>
                                            <select name="" id="" class="form-control">
                                                <option value="1" selected="">Language Default</option>
                                                <option value="1">Language Default</option>
                                                <option value="1">Language Default</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='setting-box'>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputPhone" className='lbl'>Fiat Estimation</label>
                                            <select name="" id="" class="form-control">
                                                <option value="1" selected="">USD</option>
                                                <option value="1">India</option>
                                                <option value="1">India</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='setting-box'>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputPhone" className='lbl'>Language</label>
                                            <select name="" id="" class="form-control">
                                                <option value="1" selected="">USA, English</option>
                                                <option value="1">India ,Hindi</option>
                                                <option value="1">India</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='setting-box'>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputPhone" className='lbl'>Theme</label>
                                            <p>Themes are not available on Internet Explorer and some versions of Edge.</p>
                                            <label class="radio-inline">
                                                <input type="radio" name="survey" id="Radios1" value="Yes" checked />
                                                Light
                                            </label>

                                            <label class="radio-inline">
                                                <input type="radio" name="survey" id="Radios2" value="No" />
                                                Dark
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='setting-box'>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="inputPhone" className='lbl'>Notifications</label>
                                            <p>Once enabled, you will receive relevant notifications within the app and website.</p>
                                            <div className='notification-sec'>
                                                <ul>
                                                    <li>
                                                        <div className='not-name'>Activities</div>
                                                        <div className='sld'>
                                                            <label class="switch"><input type="checkbox" /><span class="slider round"></span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='not-name'>Trade Notification</div>
                                                        <div className='sld'>
                                                            <label class="switch"><input type="checkbox" checked /><span class="slider round"></span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='not-name'>System Messages</div>
                                                        <div className='sld'>
                                                            <label class="switch"><input type="checkbox" /><span class="slider round"></span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='not-name'>Promotion</div>
                                                        <div className='sld'>
                                                            <label class="switch"><input type="checkbox" /><span class="slider round"></span></label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='not-name'>Email Notifications</div>
                                                        <div className='sld'>
                                                            <label class="switch"><input type="checkbox" /><span class="slider round"></span></label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Settings