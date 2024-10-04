import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postPhoto from "../assets/photos/post.webp";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetChPost = await fetch(`https://dummyjson.com/posts/${params.id}`);
      const jsonData = await fetChPost.json();
      //console.log(jsonData);
      setPost(jsonData);
    };
    fetchData();
  }, [params.id]);

  const postCard = (
    <div className="max-w-sm sm:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <a href="#">
        <img
          src={postPhoto}
          alt="DominoPhoto"
          className=" rounded-t-lg bg-cover  px-3 p-3 object-cover w-[200px] h-[150px] sm:w-[300px] sm:h-[300px] mx-auto"
        />
      </a>
      <div className="pt-0 sm:p-5 ">
        <a href="#">
          <h5 className="mb-2 text-md sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {post.title}
          </h5>
        </a>
        <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400 w-full px-3">
          {post.body}
        </p>
        <Link
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          to={"/"}
        >
          Back
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
  );

  return <div>{postCard}</div>;
};

export default PostPage;
