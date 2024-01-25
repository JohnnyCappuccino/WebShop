import React from "react";
import { Link } from "react-router-dom";

function SideBar({onClick}){
  return(
    <div className="sideBar">
      <div>
        <Link to="all" onClick={() => onClick("All Products")}>All</Link>
        <Link to="tech" onClick={() => onClick("Technology")}>Tech</Link>
        <Link to="life-style" onClick={() => onClick("Life-Style")}>Life-Style</Link>
        <Link to="groceries" onClick={() => onClick("Groceries")}>Groceries</Link>
        <Link to="tech" onClick={() => onClick("Best-Sellers")}>Best-Sellers</Link>
      </div>
    </div>
  )
}

export default SideBar;