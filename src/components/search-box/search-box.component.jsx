 import React from 'react';
 import './search-box.styles.css';

   // un component funzionale prende dei props e restituisce dell'html
   export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    className ='search'
    type='search' 
    placeholder={placeholder} 
    onChange={handleChange}
         
  />

  );