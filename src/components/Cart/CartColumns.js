import React from 'react';

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block cart-columns">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
        </div>
        <div className="col-10 m-auto col-lg-2">
          <p className="text-uppercase">
            Products
          </p>
        </div>
        <div className="col-10 m-auto col-lg-2">
          <p className="text-uppercase">
            name of product
          </p>
        </div>
        <div className="col-10 m-auto col-lg-2">
          <p className="text-uppercase">
            price
          </p>
        </div>
        <div className="col-10 m-auto col-lg-2">
          <p className="text-uppercase">
            quantity
          </p>
        </div>
        <div className="col-10 m-auto col-lg-2">
          <p className="text-uppercase">
            total
          </p>
        </div>
      </div>
    </div>
  )
}