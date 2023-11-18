import React from 'react';
import './style.css'

const Header_two_child = (props) => {
    return (
        <div className='header_two_nav'>
        
                <a className='header_two_nav success' href={`/${props.item}`}>{props.item}</a>
            
        </div>
    );
}

export default Header_two_child;
