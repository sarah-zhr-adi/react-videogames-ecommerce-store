import React from 'react';

export default function CartList({ item, value }){
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return(
    
      <div className="row my-2 text-capitalize text-center cart-items">

        <div className="col-10 my-auto col-lg-2">
          <div className="cart-remove" onClick={()=>removeItem(id)}>
            <i className="fa fa-trash"></i>
          </div>
        </div>
        <div className="col-10 my-auto col-lg-2">
          <img src={img} className="img-fluid" alt="product" />
        </div>
        <div className="col-10 my-auto col-lg-2">
          <span className="d-lg-none">Product:</span>
          { title }
        </div>
        <div className="col-10 my-auto col-lg-2">
          <span className="d-lg-none">Price:</span>
          ${ price }
        </div>
        <div className="col-10 my-auto col-lg-2 my-2 my-lg-0 d-flex justify-content-center align-items-center">
          <div>
            <div className="quantity-btn d-flex justify-content-center">
              <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
              <span className="btn mx-1 count">{count}</span>
              <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
            </div>
          </div>
        </div>
        <div className="col-10 my-auto col-lg-2">
          <strong>$ { total }</strong>
        </div>
      </div>
  )
}