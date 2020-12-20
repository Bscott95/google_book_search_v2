const db = require("../model");

module.exports = {
  getAllBooks: async (_req, res) => {
    try {
      const books = await db.Book.find();
      return res.json(books).status(200);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  addBook: async (req, res) => {
    const { author, title, description, image, link } = req.body;
    try {
      const book = await db.Book.create({
        author,
        title,
        description,
        image,
        link,
      });
      book.save();
      return res.json(book).status(200);
    } catch (e) {
      console.log("failed")
      return res.status(400).json(e);
    }
  },
  deleteBook: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await db.Book.findByIdAndDelete(id);
      return res.status(200).json(book);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
};
