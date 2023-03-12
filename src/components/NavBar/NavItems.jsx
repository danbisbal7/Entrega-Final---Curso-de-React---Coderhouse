import React from 'react';

const NavItems = ({ label, src }) => {
    return <li><a href={src}>{label}</a></li>
  }
  
  export default NavItems;