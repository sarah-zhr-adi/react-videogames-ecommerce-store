import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from '../styled-components/Button';

const Navigation = () => {
  return (
    <div className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        VG Store
      </Link>
      <Link to="/cart" className="ml-auto">
        <button className="cart-btn">
          My Cart
        </button>
      </Link>
    </div>
  )
}



export default Navigation;