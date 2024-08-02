import express from "express";

import categoryController from "./controllers/categories.controller";
import productsController from "./controllers/products.controller";

const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", productsController.create);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.get("/categories", categoryController.findAll);
router.post("/categories", categoryController.create);
router.get("/categories/:id", categoryController.findOne);
router.put("/categories/:id", categoryController.update);
router.delete("/categories/:id", categoryController.delete);


router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.get("/auth/me", authController.me);
router.put("/auth/profile", authMiddleware, authController.profile);

export default router;
