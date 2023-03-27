import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = ({ label, to }) => {
  return (
    <li>
      <Link to={to}>{label}</Link>
    </li>
  );
};

  export default NavItems;