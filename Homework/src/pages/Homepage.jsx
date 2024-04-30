import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className=" w-screen overflow-hidden bg-indigo-900 h-full">
      <section className="h-screen w-screen text-gray-50">
        <article className="w-screen h-[10vh] text-center bg-indigo-600 flex items-center justify-center ">
          Welcome to Homework Finder
        </article>
        <section className="h-full w-screen gap-3  flex items-center justify-start mt-20 flex-col ">
         <span> What you want to do?</span>
          <Link to={"/homework"} className="border-2 hover:bg-gray-50 hover:text-gray-900 duration-200 w-[15vw] flex items-center justify-center h-[10vh] transition border-white rounded-lg p-2">Check my homeworks</Link>
          <Link to={"/add"} className="border-2 hover:bg-gray-50 hover:text-gray-900 duration-200 w-[15vw] flex items-center justify-center h-[10vh] transition border-white rounded-lg p-2">Add person with homework</Link>
        </section>
      </section>
    </div>
  );
};

export default Homepage;
