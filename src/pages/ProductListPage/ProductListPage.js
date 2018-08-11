import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Productitem from '../../components/Productitem/Productitem';


class ProductListPage extends Component {
    render() {
        var products=[];
        return (
            <div className="container">

                <div className="row">

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <button type="button" className="btn btn-danger mr-b">Thêm sản phẩm</button>
                        <ProductList>
                            {this.showProductitem(products)}
                        </ProductList>
                    </div>

                </div>

            </div>
        );
    }
    showProductitem = (products)=>{
        var result=null;
        if(products.length>0){
            result = products.map((product,index)=>{
                return (
                    <Productitem 
                    key={index}
                    product={product}
                    index={index}
                    />
                )
            })
        }
        return result;
    }
}

export default ProductListPage;
