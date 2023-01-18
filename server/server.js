const express = require("express");

const app = express();

const PORT = 8080;

const books = [
  {
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
];

const authors = [
  {
    name: "Ali",
    surname: "Musayev",
    books: [{

        id: 1 ,
        name:"jsjsjj"
    }],
  },
];

app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/authors", (req, res) => {
    res.send(authors);
  });
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
