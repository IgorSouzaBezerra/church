import { Router } from "express";

import { CreateCostCenterController } from "../../../../modules/cost_center/service/createCostCenter/CreateCostCenterController";

const costCenterRoutes = Router();

const createCostCenterController = new CreateCostCenterController();

costCenterRoutes.post("/", createCostCenterController.handle);

export { costCenterRoutes };
