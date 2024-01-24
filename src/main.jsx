import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Cart from "./pages/Cart"
import ProductPage from "./pages/ProductPage";
import AllProducts from "./pages/AllProducts";
import Tech from "./pages/Tech";
import Lifestyle from "./pages/Lifestyle";
import Groceries from "./pages/Groceries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    
      {
        path:"product-page",
        element: <ProductPage />,
      },
      {
        path:"all",
        element: <AllProducts/>,
      },
      {
        path:"tech",
        element: <Tech/>,
      },
      {
        path:"life-style",
        element: <Lifestyle/>,
      },
      {
        path:"groceries",
        element: <Groceries/>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);