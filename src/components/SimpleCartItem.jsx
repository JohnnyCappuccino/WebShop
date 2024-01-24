import React from "react";

function SimpleCart({product,remove}){

  return (
    <div className="simpleCart">
      <img src={product.thumbnail} />
      <h3>{product.title}</h3>
      <h3>{product.price}€</h3>
      <h3>X {product.ammount}</h3>
      <button onClick={() => remove(product)}></button>
    </div>
  )
}

export default SimpleCart;