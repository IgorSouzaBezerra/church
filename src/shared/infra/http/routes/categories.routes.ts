import { Router } from "express";

import { CreateCategoryController } from "../../../../modules/products/services/createCategory/CreateCategoryController";
import { EditCategoryController } from "../../../../modules/products/services/editCategory/EditCategoryController";
import { ListCategoriesController } from "../../../../modules/products/services/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const editCategoriesController = new EditCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", listCategoriesController.handle);
categoriesRoutes.put("/:id", editCategoriesController.handle);

export { categoriesRoutes };
