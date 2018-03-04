import React from 'react';
import { Star } from 'material-ui-icons';
import times from 'lodash'

//renders the stars according to popularity.
// _.times is used to render the StarIcon component as many times as necessary
function renderStars (pop) {
    let y = 0;
    pop === 'high' ? y = 3 : pop === 'medium' ? y = 2 : y = 1
    return _.times(y, i => <Star style={{ color: '#ffdf00' }}key={i}/>)
}

//renders capacities available of phone mobile
function renderCapacities(caps) {
    return (
        caps.map((cap, i) => (
            <li key={i} className="phoneDetail__boxSec__list__item">
                <p>{cap}</p>
            </li>
        ))
    )
}

const PhoneDetailComponent = (data) => (
    <div className="phoneDetail">
        <div className="phoneDetail__boxFirst">
            <p className="phoneDetail__boxFirst__description">{data.description}</p>
            <div className="phoneDetail__boxFirst__vert">
                <span className="phoneDetail__boxFirst__vert__price">{data.price}€</span>
                <span>{ renderStars(data.popularity) }</span>
            </div>
        </div>
        <div className="phoneDetail__boxSec">
            <p className="phoneDetail__boxSec__title">Capacidades disponibles:</p>
            <ul className="phoneDetail__boxSec__list">
                { renderCapacities(data.capacity) }
            </ul>
        </div>
    </div>
);

export default PhoneDetailComponent;