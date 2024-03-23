import React from "react";
import { VEGIMG_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVegItem } from "../utils/cartSlice";
import { toast } from "react-toastify";

const VegItemCard = ({ item }) => {

   const dispatch = useDispatch();
   const handleAddVegItem = (item) => {
     dispatch(addVegItem(item));}
     
const notify3 = () => {
      toast.success("Item added to cart", {
        position: "top-center",
        
      });
    };
     



  return (
    <div className="h-[390px] w-3/12 card  cursor-pointer  rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
      <div>
        <img
          src={VEGIMG_CDN + item?.variations[0]?.images[0]}
          alt="veg"
          className="w-full h-[180px] mb-2"
        />
      </div>
      <div className="mt-4">
        <div className="text-left px-4">
          <div className="flex justify-between">
            <p className=" font-semibold text-lg text-green-600 ">
              {item?.display_name}
            </p>
            <button
              className="bg-black hover:bg-green-500 w-16  text-center rounded-md   text-white text-lg  hover:text-black 
      font-semibold"
      onClick={()=>{handleAddVegItem(item)
      notify3()}
      }
            >
              Add +
            </button>
          </div>

          <h2 className="text-green-600">
            Store Price :{" "}
            <span className="font-medium text-md line-through">
              ₹ {item?.variations[0]?.price?.store_price}
            </span>
          </h2>
          <h2 className=" text-green-600">
            Our Offer Price :{" "}
            <span className=" text-lg font-bold">
              ₹ {item?.variations[0]?.price?.offer_price}
            </span>
          </h2>
          <p className=" font-semibold text-lg text-green-600 ">
            {item?.variations[0]?.sku_quantity_with_combo}
          </p>
          <p className=" font-semibold text-lg text-green-600 ">
            {item?.variations[0]?.price?.offer_applied?.listing_description}
          </p>
          <h2 className="text-gray-600">
            {item?.variations[0]?.meta?.short_description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VegItemCard;
