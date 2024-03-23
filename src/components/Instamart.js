import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Instamart = () => {
  const [vegArray, setVegArray] = useState(null);
  useEffect(() => {
    fetchVegMenu();
  }, []);
  const fetchVegMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/instamart/category-listing?categoryName=Cold+Drinks+and+Juices&storeId=1381358&offset=0&filterName=&taxonomyType=All%20Listing"
    );
    const json = await data.json();
    //console.log(json);
    setVegArray(json?.data?.widgets[1]);
    vegArray && console.log(vegArray);
  };

  //console.log(items);https://www.swiggy.com/instamart/category-listing?categoryName=Fresh+Fruits&custom_back=true&taxonomyType=All+Listing

  //veg   "https://www.swiggy.com/api/instamart/category-listing?categoryName=Fresh%20Vegetables&storeId=1381358&offset=0&filterName=&taxonomyType=All%20Listing"

  return (
    <div className="bg-inherit flex justify-around flex-wrap">
      <div className="h-[280px]  card  cursor-pointer  rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
        <div>
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_180,w_180/ef6d7392cc14c4e55fd32508a8b8b80b"
            alt="veg"
            className="w-full h-[180px] mb-2"
          />
        </div>
        <div className="mt-4">
          <div className="text-left px-4">
            <div className="flex flex-col justify-between">
              <p className=" font-semibold text-lg text-green-600 ">
                Fresh Vegetables
              </p>
              <Link to="/instamart/vegetables">
                <button
                  className="bg-black hover:bg-green-500 w-20 my-3  text-center rounded-md   text-white text-lg  hover:text-black h-8
      font-semibold"
                >
                  Go now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[280px]  card  cursor-pointer  rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
        <div>
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_180,w_180/e1ac50f55a4dd40a80c50b9133e00c6f"
            alt="veg"
            className="w-full h-[180px] mb-2"
          />
        </div>
        <div className="mt-4">
          <div className="text-left px-4">
            <div className="flex flex-col justify-between">
              <p className=" font-semibold text-lg text-green-600 ">
                Dairy and Bread
              </p>
              <Link to="/instamart/dairy">
                <button
                  className="bg-black hover:bg-green-500 w-20 my-3  text-center rounded-md   text-white text-lg  hover:text-black h-8
      font-semibold"
                >
                  Go now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[280px]  card  cursor-pointer  rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
        <div>
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_180,w_180/67ce530dbe4f7fbfa4c0cd4a20387250"
            alt="veg"
            className="w-full h-[180px] mb-2"
          />
        </div>
        <div className="mt-4">
          <div className="text-left px-4">
            <div className="flex flex-col justify-between">
              <p className=" font-semibold text-lg text-green-600 ">
                Rice,Atta,Dals
              </p>
              <Link to="/instamart/rice">
                <button
                  className="bg-black hover:bg-green-500 w-20 my-3  text-center rounded-md   text-white text-lg  hover:text-black h-8
      font-semibold"
                >
                  Go now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[280px]  card  cursor-pointer  rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
        <div>
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/329204b8d264d0e92838cc6bff9fc737"
            alt="veg"
            className="w-full h-[180px] mb-2"
          />
        </div>
        <div className="mt-4">
          <div className="text-left px-4">
            <div className="flex flex-col justify-between">
              <p className=" font-semibold text-lg text-green-600 ">Munchies</p>
              <Link to="/instamart/munchies">
                <button
                  className="bg-black hover:bg-green-500 w-20 my-3  text-center rounded-md   text-white text-lg  hover:text-black h-8
      font-semibold"
                >
                  Go now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[280px]  card  cursor-pointer  rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
        <div>
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/a9cb16dfe5e589cc9a967e54efe785dd"
            alt="veg"
            className="w-full h-[180px] mb-2"
          />
        </div>
        <div className="mt-4">
          <div className="text-left px-4">
            <div className="flex flex-col justify-between">
              <p className=" font-semibold text-lg text-green-600 ">
                Instant Foods
              </p>
              <Link to="/instamart/instant">
                <button
                  className="bg-black hover:bg-green-500 w-20 my-3  text-center rounded-md   text-white text-lg  hover:text-black h-8
      font-semibold"
                >
                  Go now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[280px]  card  cursor-pointer  rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
        <div>
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/5df61eb5bca973d9b3abb1690a6c0eca"
            alt="veg"
            className="w-full h-[180px] mb-2"
          />
        </div>
        <div className="mt-4">
          <div className="text-left px-4">
            <div className="flex flex-col justify-between">
              <p className=" font-semibold text-lg text-green-600 ">
                Tea,Coffee and more
              </p>
              <Link to="/instamart/tea">
                <button
                  className="bg-black hover:bg-green-500 w-20 my-3  text-center rounded-md   text-white text-lg  hover:text-black h-8
      font-semibold"
                >
                  Go now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[280px]  card  cursor-pointer  rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
        <div>
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/316b56fdf54c92e41c8668c840aba068"
            alt="veg"
            className="w-full h-[180px] mb-2"
          />
        </div>
        <div className="mt-4">
          <div className="text-left px-4">
            <div className="flex flex-col justify-between">
              <p className=" font-semibold text-lg text-green-600 ">
                Sauces and Spreads
              </p>
              <Link to="/instamart/sauces">
                <button
                  className="bg-black hover:bg-green-500 w-20 my-3  text-center rounded-md   text-white text-lg  hover:text-black h-8
      font-semibold"
                >
                  Go now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[280px]  card  cursor-pointer  rounded-lg outline-none  focus:outline-none focus:ring focus:ring-violet-300">
        <div>
          <img
            src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_200,w_200/d113e476185a8537f200eaa464cf33c7"
            alt="veg"
            className="w-full h-[180px] mb-2"
          />
        </div>
        <div className="mt-4">
          <div className="text-left px-4">
            <div className="flex flex-col justify-between">
              <p className=" font-semibold text-lg text-green-600 ">Biscuits</p>
              <Link to="/instamart/biscuits">
                <button
                  className="bg-black hover:bg-green-500 w-20 my-3  text-center rounded-md   text-white text-lg  hover:text-black h-8
      font-semibold"
                >
                  Go now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instamart;
