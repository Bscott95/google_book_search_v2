const db = require("../model");
const Book = require('../model/Book');


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
    console.log(req.body)
    const { author, title, description, image, link } = req.body;
    console.log("newwwwwww", author,title,description,image, link)
    try {
      console.log("start of try")
      // const book = new Book({title, authors, description, image, link})
      const book = await db.Book.create({
        author,
        title,
        description,
        image,
        link,
      });
      console.log("book created")
      book.save();
      console.log("book", book)
      return res.json(book).status(200);
    } catch (e) {
      console.log("failed")
      return res.status(400).json(e);
    }
  },
  // addBook: async (req, res) => {
  //   const {title, authors, description, image, link} = req.body;
  //   try {
  //     const book = await new Book({title, authors, description, image, link})
  //     book.save();
  //     res.json(book);
  //   } catch (e) {
  //     console.log(e)
  //     res.status(401).json(e);
  //   }
  // },
  // addBook: function (req, res) {
  //   db.Book.create(req.body)
  //     .then(dbBook => res.json(dbBook))
  //     .catch(err => res.status(422).json(err))
  // },
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
