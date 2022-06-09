// const express = require('express');
// const router = express.Router();

const express = require('express');
const router = express.Router();

const AuthorController= require("../controllers/authorController");
const PublisherController= require("../controllers/publisherController");
const BookController = require("../controllers/bookController");


router.post("/newAuthor", AuthorController.createAuthor);

router.post("/newPublisher", PublisherController.createPublisher);

router.post("/newBook", BookController.createNewBook);

router.get("/getBookDetails", BookController.getBookDetails)

module.exports = router;



// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// module.exports = router;