import React from 'react';

import './card.css';

const Card = ({ email, id, name }) => (
  <div className='card-container'>
    <img alt='monster' src={ `https://robohash.org/${ id }?set=set2` }/>
    <h1>{ name }</h1>
    <h2>{ email }</h2>
  </div>
);

export default Card;