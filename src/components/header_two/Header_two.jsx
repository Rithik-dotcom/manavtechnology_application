import React, { useEffect, useState } from 'react';
import '../../Global_comp/style.css'
import Header_two_child from '../../Global_comp/Header_two_child';

const Header_two = () => {
    const [initialState, updatedState] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => updatedState(json))
    }, [])

    return (<div className=''>
        <div className='header_two_nav navbar bg-dark border-bottom border-body" data-bs-theme="primary"' >{initialState.map((res) => (
           
                <Header_two_child
                    className={'header_two_nav'}
                    item={res}
                    key={res}
                />
         
        ))}
        </div>
    </div>
    );
}

export default Header_two;
