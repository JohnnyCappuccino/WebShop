import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from '../components/Card';

function AllProducts(){
  const {data} = useOutletContext();
  const array = [];
  data.products.map((product) => {
    if(product.category === "fragrances" || 
    product.category === "skincare" ||
    product.category === "home-decoration"){
      array.push(product);
    }
  })

  return(
    <>
      {array.map((product, index) => 
        <Card product={product} key={index}/>
      )
        }     
    </>
  )
}

export default AllProducts;