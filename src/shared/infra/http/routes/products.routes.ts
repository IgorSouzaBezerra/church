import { Router } from "express";

import { CreateProductController } from "../../../../modules/products/services/createProduct/CreateProductController";
import { ListProductsController } from "../../../../modules/products/services/listProducts/ListProductsController";
import { UpdateProductController } from "../../../../modules/products/services/updateProduct/UpdateProductController";

const productsRoutes = Router();

const createProductsController = new CreateProductController();
const listProductsController = new ListProductsController();
const updateProductController = new UpdateProductController();

productsRoutes.post("/", createProductsController.handle);
productsRoutes.get("/", listProductsController.handle);
productsRoutes.put("/", updateProductController.handle);

export { productsRoutes };
