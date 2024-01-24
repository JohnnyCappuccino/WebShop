import React from "react";
import { Link } from "react-router-dom";


function Card ({product}) {
  return (
    <div className="card">
    <Link to="/product-page" state={{product:product}}>
      <div className="imgContainer" style={{backgroundImage: `url(${product.thumbnail})`}}>
      </div>
      <div>
        <div className="cost">
          <p>+Add to cart</p>
          <p>{product.price}€</p>
        </div>
        <h3>{product.title}</h3>
        <div>
          <p>&#x2022; {product.category}</p>
          <p>&#x2022; {product.description}</p>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default Card;