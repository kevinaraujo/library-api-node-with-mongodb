import express from "express"
import BookController from "../controller/bookController.js"

const routes = express.Router()

routes.get("/books", BookController.listBooks)
routes.get("/books/search", BookController.listBooksByEditor)
routes.get("/books/:id", BookController.listBookById)
routes.post("/books", BookController.registerBook)
routes.put("/books/:id", BookController.updateBook)
routes.delete("/books/:id", BookController.deleteBook)

export default routes