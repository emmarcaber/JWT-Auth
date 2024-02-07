const express = require("express");
const app = express();

const posts = [
  {
    username: "Emmar",
    title: "Emracabe",
  },
  {
    username: "Angel Bianca",
    title: "ABEN",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000, () => {});
