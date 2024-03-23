import React, { useState } from "react";
import Shimmer from "./Shimmer";
import "../index.css";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [accordionIndex, setAccordionIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { itemCards, title } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log(itemCards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="bg-black ">
      <div className="text-white bg-gray-900 my-2   mx-auto  w-5/12  border-black border-b-green-400 border-double border  flex  justify-center items-center  p-2   ">
        <div className="text-white flex justify-between  mx-auto w-12/12 gap-8 topintro   ">
          <div>
            <h1 className="text-lg font-bold">
              {resInfo?.cards[0]?.card?.card.info?.name}
            </h1>
            <h2 className="text-gray-500">
              {resInfo?.cards[0]?.card?.card.info?.cuisines.join(",")}
            </h2>
            <h2 className="text-gray-500">
              {resInfo?.cards[0]?.card?.card.info?.costForTwoMessage}
            </h2>

            <h2>
              {resInfo?.cards[0]?.card?.card.info?.locality} ,
              {resInfo?.cards[0]?.card?.card.info?.areaName}
            </h2>
            <h3>
              🕤
              {resInfo?.cards[0]?.card?.card.info?.sla?.minDeliveryTime} -
              {resInfo?.cards[0]?.card?.card.info?.sla?.maxDeliveryTime} mins
            </h3>
          </div>
          <div>
            <h1 className="text-green-400">Coupons and Offers:</h1>
            <h3 className="text-green-500">
              {
                resInfo?.cards[0]?.card?.card.info?.aggregatedDiscountInfoV2
                  ?.descriptionList[0]?.meta
              }
            </h3>
            <h3 className="text-green-500">
              {
                resInfo?.cards[0]?.card?.card.info?.aggregatedDiscountInfoV2
                  ?.descriptionList[1]?.meta
              }
            </h3>
            <p className="text-md font-semibold bg-green-500   w-12 text-center my-2 outline-none rounded-2xl">
              {resInfo?.cards[0]?.card?.card.info?.avgRating} &#x2605;
            </p>
            <p> {resInfo?.cards[0]?.card?.card.info?.totalRatingsString}</p>
          </div>
        </div>
      </div>

      {categories.map((category, index) => (
        <MenuCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          showAccordion={index === accordionIndex ? true : false}
          setAccordionIndex={() => {
            setAccordionIndex(index);
          }}
          className="bg-red-900"
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
