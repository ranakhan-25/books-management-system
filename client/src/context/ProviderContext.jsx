import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import BookContext from "./BookContext";

const ProviderContext = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    limit: 8,
    page: 1,
    genre: "",
    author: "",
    minYear: "",
    maxYear: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "title",
    order: "asc",
    search: "",
  });

  const [pagination, setPagination] = useState({
    totalBooks: 0,
    currentPage: 1,
    totalPage: 1,
  });

  
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      // most importent part start here======
      const params = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        if (value !== "" && value !== null && value !== undefined) {
          params.append(key, value);
        }
      });
      // most importent part end here======

      const res = await axios.get(
        `http://localhost:5179/api/books/get-all-books?${params}`,
      );
      setPagination({
        totalBooks: res.data.totalBooks,
        currentPage: res.data.currentPage,
        totalPage: res.data.totalBooks,
      });

      setBooks(res.data.books);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  const clearCurrentBook = useCallback(() => {
    setBooks(null);
  }, []);

  const updataFilter = useCallback(async (newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
      page: newFilters.page !== undefined ? Number(newFilters.page) : 1,
    }));
  }, []);

  const fetchBookDetails = useCallback(async (bookId) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await axios.get(`http://localhost:5179/api/books/book/${bookId}`);
      setCurrentBook(res.data);
      return res.data;
    } catch (error) {
      setError(error);
    }
  },[])


  useEffect(() => {
    fetchData();
  }, [filters,fetchData]);


  const value = {
    books,
    currentBook,
    isLoading,
    error,
    setError,
    fetchData,
    pagination,
    filters,
    clearCurrentBook,
    updataFilter,
    fetchBookDetails
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default ProviderContext;
