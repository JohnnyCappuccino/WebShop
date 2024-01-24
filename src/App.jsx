import { useState, useEffect } from "react";
import { Outlet,useLocation  } from 'react-router-dom';
import React from "react";
import Header from './components/Header';
import SideBar from "./components/SideBar";

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

const App = () => {
  const { data, error, loading } = getData();
  
  const [shoppingCart,setShoppingCart] = useState([]);
  const [title, setTitle] = useState("All");

  const changeTitle = (newTitle) =>{
    setTitle(newTitle);
  }

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Header title={title}/>
        <div className="parentMain">
          <SideBar onClick={changeTitle}/>
          <div className="main">
          <Outlet context={{data,shoppingCart,setShoppingCart}}/>
          </div>
        </div>
    </>
  );
};

export default App;
