import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import React, {useState} from "react";

const ProductPage = () => {
  let ammount = 1;
  const location = useLocation(false);
  const data = useOutletContext();
  const [mainImg,setMainImg] = useState(location.state.product.thumbnail)

  const changeMainImg = (img) =>{
    setMainImg(img);
  }

  return (
    <>
    <div className="productPage">
      <div>
        <div className="mainImg" style={{backgroundImage: `url(${mainImg})`}}></div>
        <div>
          {location.state.product.images.map((image, index) =>
          <div className="smallImg" style={{backgroundImage: `url(${image})`}} key={index} onClick={() =>changeMainImg(image)}/>)}
        </div>
      </div>
      <div>
        <h1>{location.state.product.title}</h1>
        <h2>{location.state.product.price}€</h2>
        <p>{location.state.product.description}</p>
        <div>
          <p>{location.state.product.rating}</p>
          <div className="star"></div>
        </div>
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input type="number" id="quantity" min="1" defaultValue={1} onChange={(e) => {ammount =e.target.value;}}/>
        </div>
        <button onClick={() => data.AddItem(location.state.product, ammount)}>Add to cart</button>
      </div>
    </div>
    </>
  )
};

export default ProductPage;