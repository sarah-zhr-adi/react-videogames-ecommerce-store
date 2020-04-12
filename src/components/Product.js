import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './../context';
import PropTypes from 'prop-types';

class Product extends Component {
  render(){
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
        <ProductConsumer>
        {(value) => (
            <div 
            className="img-container p5"
            onClick={() => value.handleDetail(id) }
            >
            <Link to="/details">
                <img src={img} alt="product" className="card-img-top"/>
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
              >
                {
                  inCart ? (
                    <p className="text-capitalize mb-0 in-cart" disabled>
                      {" "}
                      in cart
                    </p>
                  ) : (
                    <i className="fa fa-shopping-cart"></i>
                  )
                }
              </button>
            </div>
          )
        }
           
        </ProductConsumer>
          
          {/*  card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-orange font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border: none;
    transition: all .1s linear;
    border-radius: 5px;
    background: #ffffff;
    border-radius: 5px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all .1s linear;
    padding: 1.5rem 1rem;
    p {
      color: #211110;
      font-weight: 600;
    }
    h5 {
      font-weight: 600;
      font-size: 1rem;
    }
  }
  &:hover {
    .card {
      box-shadow: 0px 2px 15px rgba(0,0,0,0.2);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}
  .card-img-top {
    transition: all .1s linear;
  }
 
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainOrange);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all .3s ease-in-out;
  }

  .in-cart {
    font-size: 1rem;
  }
  
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainWhite);
    cursor: pointer;
    background-color: #b73129;
  }
`

export default Product;