import React from 'react'
import './Home.css'
// import main_banner from '../media/images/front page/JPEG Banner 2.jpg'
// import section1gif from '../media/images/svg/tools gif2.gif'
// import section1_right_image from '../media/images/svg/unlish jpg.jpg'
// import section1_after_division from '../media/images/gif Blue Gradient Header Banner.gif'

const Navbar = () => {
    return (
        <div>
            <nav className="p-3 text-light navcolor  border-bottom-primary">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">



                        <div>
                            <ul className="nav col-12 col-lg-auto">


                                <div>
                                    {/* <a href="/" className=" " data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://github.com/mdo.png" alt="mdo" width="42" height="42" className="rounded-circle" />
                                    </a> */}
                                  
                                </div>


                                <li><a href="/" className="nav-link px-2 link-secondary text-light bold">Home</a></li>
                                <li><a href="/dashboard" className="nav-link px-2 link-body-emphasis  text-light bold">Dashboard</a></li>
                                <li><a href="/login" className="nav-link px-2 link-body-emphasis text-light bold">Login</a></li>
                                <li><a href="https://google.com" className="nav-link px-2 link-body-emphasis text-light bold">Products</a></li>
                            </ul>
                        </div>




                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
