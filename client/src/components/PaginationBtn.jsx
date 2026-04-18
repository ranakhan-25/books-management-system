import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const PaginationBtn = ({ totalPage, currentPage, handlePagination }) => {

  const getPageNumber = () => {
    const pages = []
    if (totalPage <= 7) {
      for (let i = 1; i <= totalPage; i++){
        pages.push(i)
      }
    }
    return pages
  }
  return (
    <div className="flex pt-5 gap-1 items-center justify-center">
      <button onClick={()=>handlePagination(currentPage - 1)} className="text-gray-500 border border-gray-300  py-2 px-3 rounded-lg bg-white hover:bg-gray-50 disabled:bg-gray-200 cursor-pointer disabled:cursor-not-allowed" disabled={currentPage===1}>
        <FaAngleLeft />
      </button>
      {
        getPageNumber().map((page, ind) => {
          return <button onClick={()=>handlePagination(page)} className={`text-gray-500 border border-gray-300  py-1 px-3 rounded-lg   cursor-pointer ${currentPage === page ? "bg-amber-100" : "bg-white"}`} key={ind}>{page}</button>
        })
      }
      
      <button onClick={()=>handlePagination(currentPage + 1)} className="text-gray-500 border border-gray-300  py-2 px-3 rounded-lg bg-white hover:bg-gray-50 disabled:bg-gray-200 cursor-pointer disabled:cursor-not-allowed" disabled={currentPage=== totalPage}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default PaginationBtn;
