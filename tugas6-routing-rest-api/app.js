const express = require("express");
const app = express();
const port = 3000;

let category = [
  { id: 1, name: "Elektronik" },
  { id: 2, name: "Perabotan" },
];

app.use("/api", (req, res, next) => {
  console.log(`Method ${req.method} req for ${req.url}`);
  next();
});
app.use(express.json());

app.get("/api/category", (req, res) => {
  res.json(category);
});

app.get("/api/category/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  const categories = category.find((p) => p.id === categoryId);
  if (categories) {
    res.json(categories);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.post("/api/category", (req, res) => {
  const newProduct = req.body;
  newProduct.id = category.length ? category[category.length - 1].id + 1 : 1;
  category.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});
