import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import React from "react";
import Header from './components/Header';
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

const getData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products', { mode: "cors" })
      .then((response) => {return response.json()})
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
}

function App(){
  const { data, error, loading } = getData();
  
  const [shoppingCart,setShoppingCart] = useState([]);
  const [title, setTitle] = useState("");

  const changeTitle = (newTitle) =>{
    setTitle(newTitle);
  }

  const AddItem = (newItem, ammount) =>{
    const array = shoppingCart;
    if(array.includes(newItem)){
      const newAmmount = Number(array[array.indexOf(newItem)].ammount) + Number(ammount);
      array[array.indexOf(newItem)]["ammount"] = newAmmount;
    }
    else{
      Object.assign(newItem, {ammount:ammount});
      array.push(newItem);
    }
    setShoppingCart(array);
  }

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Header title={title}/>
        <div className="parentMain">
          <SideBar onClick={changeTitle} />
          <div className="main">
          <Outlet context={{data,shoppingCart,AddItem,changeTitle,setShoppingCart}}/>
          </div>
        </div>
        <Footer/>
    </>
  );
};

export default App;
