import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div className="card" style={{'width': '16rem'}}  >
                <img src={props.item.image} className="card-img-top " alt="..." width={'254px'} height={'170px'} />
                <div className="card-body">
                    <h6 className="card-title">{props.item.title}</h6>
                    <p className="card-text fs-6  fw-normal text-truncate "    >{props.item.description}</p>
                    <a href="#" className="btn btn-primary ">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
