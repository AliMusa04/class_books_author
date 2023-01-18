const express = require("express");
const { v4: uuidv4 } = require("uuid");
var cors = require("cors");

const app = express();
uuidv4();
const PORT = 8080;

app.use(express.json());
app.use(cors());
const books = [
  {
    id: "21",
    name: "alala",
    category: "dram",
    pageCount: "343",
    price: 2323,
    discountPercent: 34,
    author: {
      name: "Ali",
      surname: "Musayev",
    },
  },
  {
    id: "2",
    name: "alala",
    category: "dram",
    pageCount: "343",
    price: 2323,
    discountPercent: 34,
    author: {
      name: "anar ",
      surname: "abbas",
    },
  },
  {
    id: "221",
    name: "alala",
    category: "dram",
    pageCount: 343,
    price: 2323,
    discountPercent: 34,
    author: {
      name: "Ali",
      surname: "Musayev",
    },
  },
];

const authors = [
  {
    id: "323",
    name: "Ali",
    surname: "Musayev",
    books: [
      {
        id: 1,
        name: "jsjsjj",
      },
    ],
  },
  {
    id: "33",
    name: "QAP",
    surname: "Musayev",
    books: [
      {
        id: 4,
        name: "jsjsjj",
      },
    ],
  },
];

app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/authors", (req, res) => {
  res.send(authors);
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;

  const target = books.find((book) => book.id == id);

  if (!target) return res.status(204).send();

  res.status(200).send({ message: "succsess", target });
});

app.post("/books", (req, res) => {
  const { name, category, pageCount, price, discountPercent, authorId } =
    req.body;

  if (
    !name &&
    !category &&
    !pageCount &&
    !price &&
    !discountPercent &&
    !authorId
  )
    return res
      .status(401)
      .send({ message: "name or price or pageCount is required" });

  

  let targetAut = authors.find((item) => item.id == authorId);

  let newBook = {
    id: uuidv4(),
    name: name,
    category: category,
    pageCount: pageCount,
    price: price,
    discountPercent: discountPercent,
    author: {
      name: targetAut.name,
      surname: targetAut.surname,
    },
  };
  res.status(200).send({ message: "book is creaeted succsesfully", newBook });
  books.push(newBook);
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
