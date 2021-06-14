import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { costCenterRoutes } from "./costCenter.routes";
import { orderRoutes } from "./orders.routes";
import { productsRoutes } from "./products.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/products", productsRoutes);
router.use("/costcenter", costCenterRoutes);
router.use("/users", userRoutes);
router.use("/orders", orderRoutes);

export { router };
