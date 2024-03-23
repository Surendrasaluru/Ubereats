import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const About = () => {
  return (
    <div className="text-white bg-inherit px-6 py-4">
      <div className="flex justify-center">
        <div>
          <h1 className="text-green-500 font-bold text-lg">Uber Eats </h1>
          <h2 className="text-gray-300 font-bold text-xl w-[60%]">
            This App is Built Entirely With ReactJs.The Main Agenda of this app
            is to Offer users a convenient platform where they can access both
            grocery and food delivery services within a single app. This purpose
            aims to streamline users' daily activities by providing them with
            easy access to grocery purchase and food options in one place.
          </h2>
          <h1 className="text-green-500 font-bold text-lg">Our Services </h1>
          <div className="flex justify-around">
            <div className="card h-[290px]  cursor-pointer outline-none  focus:outline-none rounded-lg">
              <div>
                <img
                  src="https://img.freepik.com/free-vector/delivery-concept-illustration_114360-130.jpg?t=st=1711180977~exp=1711184577~hmac=284de37ffa7ec60444c2df202d23bfc71f69db216bfcdd129de5a56d3092186a&w=1060"
                  alt=""
                  className="rounded-lg "
                />
              </div>
              <div className="card-description">
                <div className="about-place">
                  <div className="place">
                    <div>
                      <p className=" text-green-700 font-bold text-lg ">
                        Food Delivery at your Door step
                      </p>
                      <p className="text-black">
                        Food will be delivered at your door steps with minimal
                        charges
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card h-[290px]  cursor-pointer outline-none  focus:outline-none rounded-lg">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-carrying-package-box-grocery-food-drink-from-store-isolated-grey-studio-background-copy-space_1258-1230.jpg?t=st=1711180718~exp=1711184318~hmac=c5d91566ff50de737aaff84bdcc090e9f4d9aca50840ca4836e53055d0e43976&w=1060"
                  alt=""
                  className="rounded-lg h-[85%]"
                />
              </div>
              <div className="card-description">
                <div className="about-place">
                  <div className="place">
                    <div>
                      <p className=" text-green-700 font-bold text-lg ">
                        All Grocery at your basket
                      </p>
                      <p className="text-black">
                        No need of going to supermarts for grocery we are here
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card h-[290px]  cursor-pointer outline-none  focus:outline-none rounded-lg">
              <div>
                <img
                  src="https://img.freepik.com/free-vector/safe-food-delivery-service_23-2148556072.jpg?t=st=1711180861~exp=1711184461~hmac=eb1bf990b5d64037b86bdc9e553b28cfcc5a464564a6f3ae3fcfa44ff50b6bcd&w=1060"
                  alt=""
                  className="rounded-lg h-[85%] "
                />
              </div>
              <div className="card-description">
                <div className="about-place">
                  <div className="place">
                    <div>
                      <p className=" text-green-700 font-bold text-lg ">
                        Hygenic Delivery
                      </p>
                      <p className="text-black">
                        Delivery agents are fully vaccinated and Hygenic upto
                        mark
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="wrapper">
              <small>
                &copy;2024{" "}
                <a
                  href="https:linkedin.com/in/surendrasaluru"
                  target="_blank"
                  className="text-green-500"
                  rel="noreferrer"
                >
                  <span className="font-bold text-xl text-green-500">
                    Surendra's Product
                  </span>
                </a>
                , All Rights Reserved
              </small>
              <nav className="footer-nav">
                <p>
                  Made with <span className="font-bold text-lg">React</span> by
                </p>
                Surendra♥ Mail Me at surendrasaluru@gmail.com
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;
