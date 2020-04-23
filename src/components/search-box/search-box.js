import React from 'react';

import './search-box.css';

const SearchBox = ({ handleChange, placeholder }) => (
  <input
    className='search'
    onChange={ handleChange }
    placeholder={ placeholder }
    type='search'/>
);

export default SearchBox;