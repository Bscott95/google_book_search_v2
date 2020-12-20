const router = require("express").Router();
// const bookController = require("../../controller/bookController");
const bookController = require("../../controller/bookController");

// other routes
router
  .route("/books")
  .post(bookController.addBook)
  .get(bookController.getAllBooks);
router.route("/books/:id").delete(bookController.deleteBook);

module.exports = router;
