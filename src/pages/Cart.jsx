import { useOutletContext,Link } from "react-router-dom";
import React, { useMemo } from "react";
import SimpleCartItem from "../components/SimpleCartItem";


const Cart = () => {
  const data = useOutletContext();

  const getTotalPrice = useMemo(() =>{
    let total = 0;
    for(let i=0; i<data.shoppingCart.length; i++){
      total += data.shoppingCart[i].price * data.shoppingCart[i].ammount;
    }
    return total;
  },[data.shoppingCart])

  const Checkout = () =>{
    if(data.shoppingCart.length > 0){
      data.setShoppingCart([]);
      window.alert("Thank you for shopping at the super store");
    }
  }

  
  const removeItem = (remove) =>{
    const cart = data.shoppingCart.filter((item) => item !== remove);
    data.setShoppingCart(cart);
  }

  return (
    <div className="cart">
      {data.shoppingCart.length <= 0 && <div className="cart">
        <h1 className="cartTitle">YOUR CART IS EMPTY</h1>
        <Link to="/all" className="checkout" onClick={() => data.changeTitle("All Products")}>SHOP NOW</Link>
        </div>}

      {data.shoppingCart.length > 0 && <div className="cart">
    <h1 className="cartTitle">YOUR CART</h1>
      <div>
        <div className="items">
        {data.shoppingCart.map((product, index) =>
            <SimpleCartItem product={product}  key={index} remove={removeItem}/>)}
        </div>
        <div className="total">
          <h1>TOTAL: {getTotalPrice}€</h1>
          <button className="checkout" onClick={() => Checkout()}>CHECKOUT</button>
          <button className="keepShoping">KEEP SHOPING</button>
        </div>
      </div>
    </div>}
    </div>
  )
};

export default Cart;