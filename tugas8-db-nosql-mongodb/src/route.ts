import express from "express";

import categoryController from "./controllers/category.controller";
import productsController from "./controllers/products.controller";

const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", productsController.create);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.get("/category", categoryController.findAll);
router.post("/category", categoryController.create);
router.get("/category/:id", categoryController.findOne);
router.put("/category/:id", categoryController.update);
router.delete("/category/:id", categoryController.delete);

export default router;
