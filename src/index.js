import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Instamart from "./components/Instamart";
import VegCart from "./components/VegCart";
import Milkmart from "./components/MilkMart";
import VegMart from "./components/VegMart";
import RiceMart from "./components/RiceMart";
import MunchMart from "./components/MunchMart";
import Instantfood from "./components/Instantfood";
import TeaMart from "./components/TeaMart";
import SauceMart from "./components/SauceMart";
import BiscuitMart from "./components/BiscuitMart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/instamart/vegetables",
        element: <VegMart />,
      },
      {
        path: "/instamart/dairy",
        element: <Milkmart />,
      },
      {
        path: "/instamart/rice",
        element: <RiceMart />,
      },
      {
        path: "/instamart/munchies",
        element: <MunchMart />,
      },
      {
        path: "/instamart/instant",
        element: <Instantfood />,
      },
      {
        path: "/instamart/tea",
        element: <TeaMart />,
      },
      {
        path: "/instamart/sauces",
        element: <SauceMart />,
      },
      {
        path: "/instamart/biscuits",
        element: <BiscuitMart />,
      },
      {
        path: "/menu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/bucket",
        element: <Cart />,
      },
      {
        path: "/FINALBasket",
        element: <VegCart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
