import React from 'react'

const Aboutus = () => {
    return (
        <div>
            <h1>ABOUT US</h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card" style={{ color: 'grey' }}>
                                    <div class="card" style={{ color: 'black' }}>
                                        <div class="card-body">
                                            <p>Welcome to Hilarity Hall, where education is an adventure fueled by imagination! Established in 2010, our dynamic blend of science, arts, and management courses sparks curiosity and cultivates creativity. With vibrant campus life and hands-on learning, every day brings new opportunities for exploration and growth. Join us at Hilarity Hall and discover the joy of learning without limits!But Hilarity Hall is more than just academics; it's a vibrant community where friendships are forged, ideas are shared, and laughter is abundant. With a calendar packed with events, clubs, and activities, there's always something exciting happening on campus.

                                                So why settle for the ordinary when you can embrace the extraordinary? Join us at Hilarity Hall and embark on a journey of discovery, creativity, and boundless opportunity. Your adventure begins here!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                COURSES PROVIDED
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <p>1.Science : Dive into the wonders of the universe with courses in biology, chemistry, physics, and more. Our hands-on approach to learning and cutting-edge research opportunities ensure that you'll be at the forefront of scientific discovery.</p>
                                                <p>1.Arts : Unleash your creativity in our arts department, where you can explore a variety of mediums including painting, performing arts, filmmaking, and more. With experienced faculty and state-of-the-art facilities, you'll have the tools and support to bring your artistic vision to life.</p>
                                                <p>1.Management : Develop the skills and knowledge needed to thrive in today's dynamic business world with our management courses. From entrepreneurship to marketing, finance to human resources, we provide a comprehensive foundation to turn your visions into reality.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                FEE STRUCTURE
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                            <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sl.No</th>
                                                    <th scope="col">Course</th>
                                                    <th scope="col">Annual Fee</th>
                                                    <th scope="col">Additional Fee</th>
                                                    <th scope="col">Scholarships/Financial Aid Available</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Science Programs</td>
                                                    <td>$10,000</td>
                                                    <td>$500 (lab fees)</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Arts Programs</td>
                                                    <td>$12,000</td>
                                                    <td>$300 (art supplies)</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Management Programs</td>
                                                    <td>$11,500</td>
                                                    <td>$400 (administrative)</td>
                                                    <td>Yes</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                ACADEMIC STRUCTURE
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <h5>Science Programs:</h5>
                                                <p>Foundation Courses: Basic sciences, mathematics, and research methods.</p>
                                                <p>Core Courses: Advanced studies in biology, chemistry, and physics.</p>
                                                <p>Electives: Specialized topics and laboratory techniques.</p>
                                                <h5>Arts Programs:</h5>
                                                <p>Foundation Courses: Introduction to various arts disciplines.</p>
                                                <p>Core Courses: In-depth training in visual arts, performing arts, or digital media.</p>
                                                <p>Electives: Advanced techniques and portfolio development.</p>
                                                <h5>Management Programs:</h5>
                                                <p>Foundation Courses: Principles of management, marketing, and finance.
                                                </p>
                                                <p>Core Courses: Business strategy, human resources, and financial management.</p>
                                                <p>Electives: Entrepreneurship, international business, and specialized topics.</p>
                                            </div>
                                        </div>
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

export default Aboutus
