import React from 'react'

const home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card" style={{ color: 'grey' }}>
                            <div class="card" style={{ color: 'black' }}>
                                <div class="card-body">
                                    <h5 class="card-title">WELCOME</h5>
                                    <p class="card-text">Welcome to Hilarity Hall, the whimsical hub of higher education where laughter meets learning! Situated in the charming town of Hilanagar, Hilarity Hall is more than just a college—it's an experience like no other.

                                        At Hilarity Hall, we believe that education should be as enjoyable as it is enriching. Our innovative programs, led by esteemed faculty members, blend academic rigor with a touch of humor, creating a truly unique learning atmosphere. Here, students are encouraged to think creatively, explore new ideas, and embrace their individuality.

                                        Beyond the classroom, Hilarity Hall offers a vibrant campus life filled with laughter, friendship, and endless opportunities for personal growth. From comedy clubs to themed events, there's always something exciting happening on campus.

                                        So, whether you're a prospective student, a proud parent, or just curious about what makes Hilarity Hall so special, we invite you to explore our website and discover the magic of our community. Welcome to Hilarity Hall—where education is anything but ordinary!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715695417/ivd5nfwai1lo7xknugc4.jpg"  width="1000" height="500" alt="" />
                                </div>
                                <div class="carousel-item active">
                                    <img src="http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715695442/vflz01uwpglreoqxkim0.jpg"  width="1000" height="500" alt="" />
                                </div>
                                <div class="carousel-item active">
                                    <img src="http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715695485/zwac9l9vvq16ea9vsylv.jpg"  width="1000" height="500" alt="" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card" style={{ color: 'grey' }}>
                            <div class="card" style={{ color: 'black' }}>
                                <div class="card-body">
                                    <h5 class="card-title">OUR SERVICES</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3">
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                        <img src="http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715613933/rdj7ailn7u4w1twl7mut.jpg" class="card-img-top" width="100" height="400" alt="" />
                                <div class="card-body">
                                    <p class="card-text">ONLINE COURSES</p>
                                </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715613969/fxylwm7eflh41r1erz3x.jpg" class="card-img-top" width="100" height="400" alt="" />
                                <div class="card-body">
                                    <p class="card-text">ADMISSION DETAILS</p>
                                </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">
                        <div class="card">
                        <img src="http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715614002/ditcmu2tmsle9y8ng4at.jpg" class="card-img-top" width="100" height="400" alt="" />
                                <div class="card-body">
                                    <p class="card-text">SCHOLARSHIP PROGRAMS</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default home

