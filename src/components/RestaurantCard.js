import React from "react";
import "../index.css";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } =
    resData?.info;

  return (
    <div className="card h-[370px]  cursor-pointer rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
      <div>
        <img
          className="w-[285px] h-[190px]"
          src={CDN_URL + cloudinaryImageId}
          alt="Resto Intro"
        />
      </div>
      <div className="card-description">
        <div className="about-place">
          <div className="place">
            <div>
              <p className="place-name">{name}</p>
            </div>
            <p className="place-speciality">{cuisines.join(" ,")}</p>
            <p className=" pb-4 text-gray-700">{resData?.info.sla.slaString}</p>

            <p className="place-speciality">📍{areaName} </p>
          </div>
          <div className="place-review flex flex-col  ">
            <p className="per-person pb-4">{costForTwo} </p>
            <p className="rating">{avgRating} &#x2605;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
