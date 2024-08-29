import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({products}) => {


  return <div data-testid="products-container">

   {products && products?.map((product)=>{
    return <ProductItem key= {product.id} title={product.title} price={product.price} category={product.category} image={product.image}/>
   })}

  </div>;
};

// export
export default ProductList;
