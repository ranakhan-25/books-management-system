import React, { lazy, Suspense, useEffect } from "react";
const BookCard = lazy(() => import("./BookCard"));
import useBooks from "../hooks/useBooks";
import CategoryNav from "./CategoryNav";
import Sorting from "./Sorting";
import PaginationBtn from "./PaginationBtn";
import  axios  from "axios";
import { useNavigate } from "react-router";

const Books = () => {
  const {
    books,
    fetchData,
    pagination,
    filters,
    updataFilter,
  } = useBooks();
  const navigate = useNavigate()

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

  const handleSortChange = (sortChange) => {
    updataFilter({
      sortBy: sortChange.sortBy,
      order: sortChange.order,
      page:1,
    })
  }

  const handlePagination = (newPage) => {
    updataFilter({
      page:newPage,
    })
  }


  const handelDelete = async(bookId) => {
    try {
      await axios.delete(`http://localhost:5179/api/books/book/${bookId}`)
      alert("book deleted successfully")
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  const handelEdit = (id) => {
    navigate(`/book/${id}`)
  }

  

  return (
    <div className=" max-w-400 mx-auto md:gap-10  px-6 lg:px-[8%] py-10 bg-[#dbeafe97]">

      <div className="flex justify-between items-center flex-wrap border-b border-gray-300">
        <CategoryNav
          categories={categories}
          activeCategory={filters.genre || "All-Category"}
          handelCategoryChange={handelCategoryChange}
        />
        <Sorting
          currentSort={{
            sortBy: filters.sortBy,
            order:filters.order,
          }}
          handleSortChange={handleSortChange} />
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
                <BookCard key={book._id} book={book} handelDelete={handelDelete} handelEdit={handelEdit} />
              ))}
          </div>
      </Suspense>
      {pagination.totalPage > 1 && (<PaginationBtn
        totalPage={pagination.totalPage}
        currentPage={pagination.currentPage}
        handlePagination={handlePagination}
      />)}
    </div>
  );
};

export default Books;
