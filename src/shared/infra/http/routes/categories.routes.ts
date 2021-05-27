import { Router } from "express";

import { CreateCategoryController } from "../../../../modules/products/services/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../../../../modules/products/services/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };
