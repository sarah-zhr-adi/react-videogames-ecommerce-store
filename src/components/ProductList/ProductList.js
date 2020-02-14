import React, {Component} from 'react';
import Product from '../Product/Product';
import Title from './../Title/Title';
import { storeProducts } from '../../data';



class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render(){
    console.log(this.state.products);
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">

            </div>
          </div>
        </div>
      </>
    )
    // <Product/>
  }
}

export default ProductList;