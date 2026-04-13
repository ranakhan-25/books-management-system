import React, { useContext } from 'react'
import BookContext from '../context/BookContext'

const useBooks = () => {
  const context = useContext(BookContext)
  if (!context) {
    throw new Error("usecontext must be within a book probider")
  }
  return context;
}

export default useBooks