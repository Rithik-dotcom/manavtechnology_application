import React from 'react';
import  { useEffect, useState } from 'react';
import Card from '../components/card/Card';

const Men = () => {
    const [initialState, updatedState] = useState([])
    const x = 's%20clothing'
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/men'${x}`)
            .then(res => res.json())
            .then(json => updatedState(json))
    }, [])
  return (
    <div>
      <div className='container'>
        <div className='header_two_nav nav' >{initialState.map((res) => (
            <div className='header_two_nav nav' key={res.id} >
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

export default Men;
