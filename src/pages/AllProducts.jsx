import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from '../components/Card';

function AllProducts(){
  const {data} = useOutletContext();
  return(
    <>
      {data.products.map((product, index) => 
        <Card product={product}
        key={index}/>)
        }     
    </>
  )
}

export default AllProducts;