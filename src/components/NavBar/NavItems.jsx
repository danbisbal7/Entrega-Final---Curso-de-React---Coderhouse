import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = ({ label, to }) => {
  return (
    <li>
      <Link to={to}>{label}</Link>
    </li>
  );
};

/*const NavItems = ({ label, src }) => {
    return <li><a href={src}>{label}</a></li>
  }*/
  
  export default NavItems;