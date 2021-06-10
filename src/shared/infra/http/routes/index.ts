import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { costCenterRoutes } from "./costCenter.routes";
import { productsRoutes } from "./products.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/products", productsRoutes);
router.use("/costcenter", costCenterRoutes);

export { router };
