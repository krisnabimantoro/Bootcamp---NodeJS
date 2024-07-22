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

app.put("/api/category/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  const categoryIndex = category.findIndex((p) => p.id === categoryId);

  if (categoryIndex !== -1) {
    category[categoryIndex] = { id: categoryId, ...req.body };
    res.json(category[categoryIndex]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.delete("/api/category/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  category = category.filter((p) => p.id !== categoryId);
  res.status(204).send();
});

let data = [
  { id: 1, name: "Laptop", category: "Elektronik" },
  { id: 2, name: "Meja", category: "Perabotan" },
];

app.get("/api/search", (req, res) => {
  const query = req.query.q;

  const queryData = data.find((p) => p.name === query);
  if (queryData) {
    res.json({ search: query, result: queryData });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/api/search/:category", (req, res) => {
  const cat = req.params.category;
  const query = req.query.q;

  const categories = data.filter((c) => c.category === cat);
  const queryData = categories.find((p) => p.name === query);
  if (queryData ) {
    res.json(queryData);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});
