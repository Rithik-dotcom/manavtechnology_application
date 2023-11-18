import React from 'react'
import './Home.css'
import main_banner from '../media/images/front page/JPEG Banner 2.jpg'
import section1gif from '../media/images/svg/tools gif2.gif'
import section1_right_image from '../media/images/svg/unlish jpg.jpg'
import section1_after_division from '../media/images/gif Blue Gradient Header Banner.gif'



const Home = () => {
    return (
        <div>
            {/* banner */}
            <a href='/'> <img src={main_banner} alt='main_banner' className='banner_image' ></img></a>
            <button className="button-29" >Explore More</button>


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














