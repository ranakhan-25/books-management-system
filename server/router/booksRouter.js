const bookRoute = require("express").Router();

const deleteBookById = require("../controllers/deleteBookController");
const getAllData = require("../controllers/getAllDataControllers");
const getBookById = require("../controllers/getBookByIdControllers");
const insertData = require("../controllers/insertDataController");
const updataBookById = require("../controllers/updataBookController");


// get all book with searching, sorting, and pagination 
bookRoute.get("/get-all-books", getAllData);

// insert a new book
bookRoute.post("/insert", insertData);

// get single book by id
bookRoute.get("/book/:id", getBookById);

// update book by id
bookRoute.put("/book/:id", updataBookById);

// delete book by id
bookRoute.delete("/book/:id", deleteBookById);


module.exports = bookRoute;
