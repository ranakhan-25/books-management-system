

import { useState } from "react";
import HeroImg from "../assets/books-hero.webp";
import useBooks from "../hooks/useBooks";

export default function Hero() {

  const {updataFilter} = useBooks()
  const [searchValue, setSearchBalue] = useState("");
  

  const handelSubmit = (e) => {
    e.preventDefault();
    updataFilter({
      search: searchValue.trim(),
      page:1,
    })
  }

  return (
    <section className="">
      <div className="py-16 min-h-screen bg-blue-100 text-gray-900 max-w-400 mx-auto md:gap-10  px-6 lg:px-[8%] flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="flex flex-col text-center md:text-left md:pr-10 md:w-[55%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-18 xl:text-7xl">
            <span className="text-indigo-600">Welcome to our books</span> -a
            heaven for book lovers
          </h1>

          <form onSubmit={handelSubmit} className="mt-6 flex justify-center md:justify-start">
            <input
              type="text"
              onChange={(e)=>setSearchBalue(e.target.value)}
              placeholder="Search books..."
              className="w-64 md:w-80 px-4 py-2 bg-indigo-200 rounded-l-md text-black focus:outline-none"
            />
            <button type="submit" className="bg-[#DC0B88] text-white px-4 py-2 rounded-r-md font-semibold hover:bg-[#C129B5] transition cursor-pointer">
              Search
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex md:w-[45%] mt-10 md:mt-0">
          <img
            src={HeroImg}
            alt="Books Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
