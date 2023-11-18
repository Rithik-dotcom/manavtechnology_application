import React from 'react';
import  { useEffect, useState } from 'react';
import Card from '../components/card/Card';
const Jewellery = () => {
    const [initialState, updatedState] = useState([])
    useEffect(() => {
        fetch(' https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(json => updatedState(json))
    }, [])
  return (
    <div>
      <div className='container'>
        <div className='header_two_nav nav' >{initialState.map((res) => (
            <div className='header_two_nav nav' key={res} >
                <Card
                    className={'header_two_nav'}
                    item={res}
                />
            </div>
        ))}
        </div>
    </div>
    </div>
  );
}

export default Jewellery;
