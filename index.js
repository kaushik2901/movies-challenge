const express = require("express");
const movies = require("./movies");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

const guid = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const index = movies.findIndex((x) => x.id == id);
  if (index < 0) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  res.json(movies[index]);
});

app.post("/api/movies", (req, res) => {
  const { title, imageURL, description, duration } = req.body;
  if (!title || !imageURL || !description || !duration) {
    return res.status(400).json({
      message: "All inputs Required",
    });
  }

  const item = {
    id: guid(),
    title,
    imageURL,
    description,
    duration,
    likes: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  movies.push(item);
  res.json(item);
});

app.put("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const { title, imageURL, description, duration } = req.body;

  if (!title && !imageURL && !description && !duration) {
    return res.status(400).json({
      message: "At least one parameter required to update movie",
    });
  }

  const index = movies.findIndex((x) => x.id == id);
  if (index < 0) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  movies[index].title = title ?? movies[index].title;
  movies[index].imageURL = imageURL ?? movies[index].imageURL;
  movies[index].description = description ?? movies[index].description;
  movies[index].duration = duration ?? movies[index].duration;
  movies[index].updatedAt = new Date();

  res.json(movies[index]);
});

app.put("/api/movies/:id/increment-like", (req, res) => {
  const id = req.params.id;

  const index = movies.findIndex((x) => x.id == id);
  if (index < 0) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  movies[index].likes = movies[index].likes + 1;
  movies[index].updatedAt = new Date();
  res.json(movies[index]);
});

app.delete("/api/movies/:id", (req, res) => {
  const id = req.params.id;

  const index = movies.findIndex((x) => x.id == id);
  if (index < 0) {
    return res.status(404).json({
      message: "Movie not found",
    });
  }

  movies.splice(index, 1);
  res.json(movies);
});

app.listen(3000, () => console.log("Server started at 3000"));
