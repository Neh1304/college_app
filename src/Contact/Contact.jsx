import React from 'react'

const Contact = () => {
    return (
        <div>
            <h1>CONTACT US</h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                 <input type="text" className="form-control" placeholder='Enter your name' />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Semester</label>
                                 <select name="" id="" className="form-select">
                                    <option value="S1">S1</option>
                                    <option value="S2">S2</option>
                                    <option value="S3">S3</option>
                                    <option value="S4">S4</option>
                                    <option value="S5">S5</option>
                                    <option value="S6">S6</option>
                                    <option value="S7">S7</option>
                                    <option value="S8">S8</option>
                                 </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Branch</label>
                            <select name="" id="" className="form-select">
                                    <option value="CSE">CSE</option>
                                    <option value="IT">IT</option>
                                    <option value="ME">ME</option>
                                    <option value="CE">CE</option>
                                    <option value="AI">AI</option>
                                    <option value="EC">EC</option>
                                    <option value="EEE">EEE</option>
                                    <option value="FT/BT">FT/BT</option>
                                 </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Grievence</label>
                                 <textarea name="" id="" className="form-control" placeholder='Enter your grievences'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card" style={{ color: 'grey' }}>
                            <div class="card" style={{ color: 'black' }}>
                                <div class="card-body">
                                    <p>CALL US: 91XXXXXXXX</p>
                                    <p>EMAIL US: hilarityxxx@xmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
