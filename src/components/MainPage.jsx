import React, { useEffect, useState } from "react";
import postPhoto from "../assets/photos/post.webp";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchLocation = await fetch("https://dummyjson.com/posts");
        const jsonData = await fetchLocation.json();
        //console.log(jsonData);
        setPost(jsonData.posts);
        // console.log(jsonData.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const postCard = post.map((item) => {
    return (
      <div
        className=" w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 mx-auto "
        key={item.id}
      >
        <a href="#">
          <img
            src={postPhoto}
            alt="DominoPhoto"
            className=" rounded-t-lg bg-cover w-[300px] h-[150px] sm:h-[200px]  pt-5 object-cover px-3"
          />
        </a>
        <div className="">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white w-[300px]  px-3 text-center pt-2">
              {item.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-[300px] h-[200px] overflow-hidden px-3 ">
            {item.body}
          </p>
          <div className="pb-5 flex justify-center">
            <Link
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              to={`/${item.id}`}
            >
              View more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="py-3">
        <h1 className="font-semibold text-xl sm:text-3xl text-center">
          Recent Posts
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  w-full ">
        {postCard}
      </div>
    </div>
  );
};

export default MainPage;
