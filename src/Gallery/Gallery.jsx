import React from 'react'

const Gallery = () => {
    return (
        <div>
            <h1>GALLERY</h1>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715700291/sluej7h8cumjnstrymnp.jpg"  width="1000" height="500" alt="" />
                                </div>
                                <div class="carousel-item">
                                    <img src="http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715700401/zw9zz29hcktc1sug0nf0.jpg"  width="1000" height="500" alt="" />
                                </div>
                                <div class="carousel-item">
                                    <img src="http://res.cloudinary.com/dwmwpmrpo/image/upload/v1715700423/scqzeophfwr9iwdti3mw.jpg"  width="1000" height="500" alt="" />
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
                </div>
            </div >
        </div >

    )
}

export default Gallery
