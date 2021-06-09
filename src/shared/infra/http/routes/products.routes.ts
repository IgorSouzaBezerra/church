import { Router } from "express";

import { CreateProductController } from "../../../../modules/products/services/createProduct/CreateProductController";
import { ListProductsController } from "../../../../modules/products/services/listProducts/ListProductsController";

const productsRoutes = Router();

const createProductsController = new CreateProductController();
const listProductsController = new ListProductsController();

productsRoutes.post("/", createProductsController.handle);
productsRoutes.get("/", listProductsController.handle);

export { productsRoutes };
