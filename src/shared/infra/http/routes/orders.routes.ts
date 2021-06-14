import { Router } from "express";

import { CreateOrderController } from "../../../../modules/orders/services/createOrder/CreateOrderController";

const orderRoutes = Router();

const createOrderController = new CreateOrderController();

orderRoutes.post("/", createOrderController.handle);

export { orderRoutes };
