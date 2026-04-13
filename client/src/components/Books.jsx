import React, { lazy, Suspense } from "react";
const BookCard = lazy(() => import("./BookCard"));
import useBooks from "../hooks/useBooks";

const Books = () => {
  const {
    books,
    // currentBook
    // error,
    // setError,
    // fetchData,
    pagination,
    // filters,
    // clearCurrentBook,
    // updataFilter,
    // fetchBookDetails
  } = useBooks();

  const handelDelete = (bookId) => {
    console.log("delete button is clicked",bookId)
  }


  return (
    <div className=" max-w-400 mx-auto md:gap-10  px-6 lg:px-[8%] py-10 bg-[#dbeafe97]">

      <div>
        <h2 className="my-3 font-medium">Showing 1-8 of 10 books</h2>
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
