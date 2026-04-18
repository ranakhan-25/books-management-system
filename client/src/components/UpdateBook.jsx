import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import useBooks from '../hooks/useBooks'

const UpdateBook = () => {
  const { id } = useParams()
  const { currentBook, fetchBookDetails } = useBooks();
  useEffect(() => {
    fetchBookDetails(id)
  },[id,fetchBookDetails])
  
  console.log(currentBook)


  return (
    <div className='text-center text-3xl font-bold text-red-500 my-5'>This page is not available yet!</div>
  )
}

export default UpdateBook