import React, { Component } from 'react';
import { ProductConsumer } from './../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../styled-components/Button';


export default class Details extends Component {
  render(){
    return (
     <ProductConsumer>
       {
         value => {
           const { id, img, info, price, title, inCart } = value.detailProduct;
           return(
             <>

             <div className="container-fluid p-5 product-details">
              <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize text-center">
                    <img src={img} className="img-fluid" alt="game" />
                  </div>
                  <div className="col-10 my-auto col-md-6 my-3 text-capitalize">
                    <h2>{title}</h2>
                    <h4 className="text-orange">
                      <strong>${price}</strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Description:
                    </p>
                    <p className="text-muted lead">
                      {info}
                    </p>
                    <ButtonContainer 
                    cart
                    disabled={ inCart ? true : false }
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    >
                      {
                        inCart ? "in cart" : "Add to Cart"
                      }
                    </ButtonContainer>
                    
                    <Link to="/">
                     View more products
                    </Link>
                    
                  </div>
                </div>
             </div>
             
             

            

             </>
           )
         }
       }
     </ProductConsumer>
    )
  }
}
