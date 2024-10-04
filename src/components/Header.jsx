import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-blue-500 px-5 py-5 flex items-center justify-between">
        <h1 className="font-semibold text-white ">Blog Post App</h1>
        <div className="space-x-4 text-white flex">
          <Link to={"/"}>Home</Link>
          <a
            href="https://github.com/dineshdevelope/Dummy-Blog-Post"
            target="-_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
