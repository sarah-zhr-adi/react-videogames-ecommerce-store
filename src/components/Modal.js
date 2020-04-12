import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './../context';
import { ButtonContainer } from '../styled-components/Button';


export default class Details extends Component {
  render(){
    return (
      <ProductConsumer>
        {
          (value) => {
            const {modalOpen, closeModal} = value;
            const {img, title, price} = value.modalProduct;

            if(!modalOpen){
              return null;
            }
            else {
              return(
                <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div id="modal" className="col-12 mx-auto col-md-10 col-lg-6 text-center text-capitalize p-5">
                      <h5>Item added to the cart!</h5>
                      <div className="modal-btns-container">
                      <Link to="/cart">
                          <ButtonContainer cart onClick={()=>closeModal()}>
                            View Cart
                          </ButtonContainer>
                        </Link>
                        <Link to="/">
                          <button className="cart-btn" onClick={()=>closeModal()}>
                            Continue Shopping
                          </button>
                        </Link>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </ModalContainer>
              )
              
            }
          }
        }
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div `
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`