import React from "react";

const BookCard = ({ book,handelDelete,handelEdit }) => {
  const {
    title,
    author,
    price,
    imageUrl,
    _id
  } = book;
  return (
    <div>
      <div className="bg-white p-3 rounded-2xl">
        <div className="bg-gray-100 ">
          <img
            className="rounded-xl py-3 mx-auto max-h-50"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-xl font-medium">{title}</h1>
          <h1 className="my-1">{author}</h1>
          <div className=" flex justify-between items-center">
            <h2 className="text-yellow-500 font-bold">${price}</h2>
            <div className="flex items-center gap-3">
              <button className="text-sm underline cursor-pointer" onClick={()=>handelEdit(_id)}>Edit</button>
              <button onClick={()=>handelDelete(_id)} className="text-sm underline cursor-pointer">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
