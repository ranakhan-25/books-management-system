import React, { lazy, Suspense, useEffect } from "react";
const BookCard = lazy(() => import("./BookCard"));
import useBooks from "../hooks/useBooks";
import CategoryNav from "./CategoryNav";

const Books = () => {
  const {
    books,
    // currentBook,
    // error,
    // setError,
    fetchData,
    pagination,
    filters,
    // clearCurrentBook,
    updataFilter,
    // fetchBookDetails
  } = useBooks();

  const categories = ["All-Category","Fiction","Dystopian","Adventure","Romance","Historical","Psychological","Non-Fiction"]


  useEffect(() => {
    fetchData()
  },[filters,fetchData])

  const handelCategoryChange = (category) => {
    updataFilter({
      genre: category === "All-Category" ? "" : category,
      page:1,
    })
  }

  const handelDelete = (bookId) => {
    console.log("delete button is clicked",bookId)
  }

  

  return (
    <div className=" max-w-400 mx-auto md:gap-10  px-6 lg:px-[8%] py-10 bg-[#dbeafe97]">

      <div className="flex justify-between items-center flex-wrap border-b border-gray-300">
        <CategoryNav
          categories={categories}
          activeCategory={filters.genre || "All-Category"}
          handelCategoryChange={handelCategoryChange}
        />
        <div>sorting</div>
      </div>


      <div className="my-3 font-medium text-gray-600">
        Showing {pagination.totalPage > 0 ? (pagination.currentPage - 1) * filters.limit + 1 : 0} - <span>{Math.min(pagination.currentPage * filters.limit, pagination.totalBooks)}</span> of {pagination.totalBooks} Books
      </div>
      

        <Suspense
          fallback={
            <div className="text-center py-20">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-5">
            {books &&
              books.map((book) => (
                <BookCard key={book._id} book={book} handelDelete={handelDelete} />
              ))}
          </div>
        </Suspense>
    </div>
  );
};

export default Books;
