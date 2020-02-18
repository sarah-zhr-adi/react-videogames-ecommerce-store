import React, {Component} from 'react';
import Product from '../Product/Product';
import Title from './../Title/Title';
import { storeProducts } from '../../data';
import { ProductConsumer } from '../../context';


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
              <ProductConsumer>
                {(value) => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProductList;