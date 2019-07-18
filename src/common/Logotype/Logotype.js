import React from 'react';
import { Link } from 'react-router-dom';
import './styles/_logotype.scss';

function Logotype() {
  return (
    <Link to="/home">
      <div className="logotype__img" />
    </Link>
  )
}

export default Logotype;
