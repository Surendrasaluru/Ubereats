import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ items }) => {
  /*const notify2 = () => {
    toast("Item added to bucket", {
      style: {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        color: "#fff",
        theme: "dark",
      },
    });
  };*/
  //console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const notify2 = () => {
    toast.success("Item added to cart", {
      position: "top-center",
    });
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="py-2 px-2  ml-[29%] w-[700px]  border text-white border-black border-b-green-300 "
          key={item?.card?.info?.id}
        >
          <div className="flex justify-center">
            <div className="w-3/4">
              <p className="font-semibold  text-lg text-green-500">
                {item.card?.info?.name}{" "}
              </p>

              <p className="font-semibold text-lg text-md ">
                Rs.
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
              <h2 className="w-[85%] text-slate-400 text-sm">
                {item?.card?.info?.description}
              </h2>
              <p className="pb-2  text-green-500 ">
                {item?.card?.info?.ribbon?.text ? "⭐ BestSeller" : ""}{" "}
              </p>
            </div>
            <div className="px-1 flex flex-col justify-center py-3">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                alt="itempic"
                className="w-48 h-auto border  rounded-md shadow-md  shadow-green-500"
              />
              <button
                className="bg-white hover:bg-green-500 w-24 mx-12 text-center rounded-md   text-green-700 text-lg my-2 hover:text-black 
              font-semibold"
                onClick={() => {
                  handleAddItem(item);
                  notify2();
                }}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
