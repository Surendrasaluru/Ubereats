import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonState, setButtonState] = useState(true);
  const notify = () => {
    buttonState &&
      toast.success("You are loggedin ✅", {
        position: "bottom-right",
      });
  };

  const status = useOnlineStatus();
  //subscribing to store(in deep cart slice) using selector
  const cartItems = useSelector((store) => store.cart.items);
  const vegItems = useSelector((store) => store.cart.vegItems);

  return (
    <div className="flex items-center flex-row  justify-between  bg-green-600 ">
      <div className="flex justify-between">
        <img src={LOGO_URL} alt="logo" className="w-36 m-8" />
      </div>
      <div className="   mx-5 text-center text-xl font-semibold text-white">
        <ul className="px-3 flex flex-row m-10 text-black">
          <li className="mr-7">{status ? "🟢" : "🔴"}</li>
          <Link to="/">
            <li className="mr-7">Home</li>
          </Link>
          <Link to="/instamart">
            <li className="mr-7">Grocerymart</li>
          </Link>
          <Link to="/about">
            <li className="mr-7"> About Us</li>
          </Link>
          <Link to="/bucket">
            <li className="mr-7 font-semibold">
              Food Cart({cartItems.length})
            </li>
          </Link>
          <Link to="/FINALBasket">
            <li className="mr-7 font-semibold">
              Grocery Cart({vegItems.length})
            </li>
          </Link>

          <button
            className="w-[130px] px-6 py-3 border-2 text-center bg-black h-[40px]  flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(30,188,101)] before:transition-all before:duration-300 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0  text-[#fff]"
            onClick={() => {
              setButtonState(!buttonState);
              notify();
            }}
          >
            {buttonState ? "Login" : "Logout"}
          </button>
          <ToastContainer position="bottom-right" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
