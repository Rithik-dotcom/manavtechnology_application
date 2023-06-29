import React from 'react'
import './Home.css'
import main_banner from '../media/images/front page/JPEG Banner 2.jpg'
import section1gif from '../media/images/svg/tools gif2.gif'
import section1_right_image from '../media/images/svg/unlish jpg.jpg'
import section1_after_division from '../media/images/gif Blue Gradient Header Banner.gif'


const Home = () => {
    return (
        <div>
            {/* navbar */}

            <nav className="p-3 text-light navcolor  border-bottom-primary">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        {/* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
                        </a> */}

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <img src='https://www.manavtechnology.com/wp-content/uploads/2023/04/cropped-cropped-cropped-logo2-1.png' width={130} height={40} alt='manav-logo'></img>

                        </ul>

                        {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
        </form> */}

                        <ul className="nav col-12 col-lg-auto">
                            <li><a href="https://google.com" className="nav-link px-2 link-secondary text-light bold">Overview</a></li>
                            <li><a href="https://google.com" className="nav-link px-2 link-body-emphasis  text-light bold">Inventory</a></li>
                            <li><a href="https://google.com" className="nav-link px-2 link-body-emphasis text-light bold">Customers</a></li>
                            <li><a href="https://google.com" className="nav-link px-2 link-body-emphasis text-light bold">Products</a></li>
                        </ul>

                        <div className="dropdown text-end">
                            <a href="https://google.com" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small navcolor">
                                <li><a className="dropdown-item  text-light hoverOne" href="https://google.com">New project...</a></li>
                                <li><a className="dropdown-item text-light  hoverOne" href="https://google.com">Settings</a></li>
                                <li><a className="dropdown-item text-light hoverOne" href="https://google.com">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item text-light hoverOne" href="https://google.com">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>

            {/* banner */}
            <img src={main_banner} alt='main_banner' className='banner_image' ></img>
            <button class="button-29" >Explore More</button>


            {/* Section 1 */}
            <div className='section_1_main'>
                <div className='section_1_left'> <img src={section1gif} className='section1_left_img_gif' alt='section1_left_img_gif' /></div>
                <div className='section_2_right'><img src={section1_right_image} className="section1_right-image" alt='section1_right_image'/></div>
            </div>

            <div>
                <img src = {section1_after_division} alt='section1_after_division' className='section1_after_division ' />
            </div>

        </div>
    )
}

export default Home














