import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

let smallHeaderStyle ="0px";

function Header({title}){

  const [scrollDir, setScrollDir] = useState("scrolling up");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;
  
    const updateScrollDir = () => {
      const scrollY = window.scrollY;
  
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
  
    const onScroll = () => {
      setScrollDir("scrolling down");
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
      }
  
    window.addEventListener("scroll", onScroll);  
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);


  if(scrollDir === "scrolling up"){
    smallHeaderStyle= "0px";
  }
  else{
    smallHeaderStyle = "-100px";
  }

  return(
    <header className="Header">
      <div className="smallHeader" style={{top: smallHeaderStyle}}>
        <Link to="/all" state={{id:"23"}}>Shop name</Link>
        <h1>{title}</h1>
        <Link to="cart" state={{cart:"hello"}}><img src="/src/images/bag.png" alt="cart" className="bag"></img></Link>
      </div>
    </header>
  )
}

export default Header;