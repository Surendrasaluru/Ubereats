import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <img
        className="flex flex-col items-center justify-center w-full h-[500px]"
        src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg "
        alt="error"
      />
      <Link to="/">
      <button className="bg-black border-2 rounded-lg text-white px-6 py-3 mt-[5%] ml-[45%] text-base cursor-pointer transition">
        Back to Home
      </button>
      </Link>
    </div>
  );
};

export default Error;
