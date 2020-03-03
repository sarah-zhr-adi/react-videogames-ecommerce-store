import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './../../styled-components/Button';


export default class Details extends Component {
  render(){
    return (
     <ProductConsumer>
       {
         value => {
           const { id, company, img, info, price, title, inCart } = value.detailProduct;
           return(
             <>

             <div className="container py-5">
               <div className="row">
                 <div className="col-10 mx-auto text-center text-slanted text-orange my-5">
                   <h1>{title}</h1>
                 </div>
               </div>
             </div>
             
             <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} className="img-fluid" alt="game" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>{title}</h2>
                <h3 className="text-title text-uppercase text-muted mt-3 mb-2">
                  {company}
                </h3>
                <h4 className="text-orange">
                  <strong>price: ${price}</strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Description:
                </p>
                <p className="text-muted lead">
                  {info}
                </p>
                 <Link to="/">
                  <ButtonContainer>back to products page</ButtonContainer>
                </Link>
                 <ButtonContainer 
                 cart
                 disabled={ inCart ? true : false }
                 onClick={() => {
                   value.addToCart(id)
                 }}
                 >
                   {
                     inCart ? "in cart" : "add to cart"
                   }
                 </ButtonContainer>
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
