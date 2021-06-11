import { Router } from "express";

import { CreateCostCenterController } from "../../../../modules/cost_center/service/createCostCenter/CreateCostCenterController";
import { ListCostCenterController } from "../../../../modules/cost_center/service/listCostCenter/ListCostCenterController";

const costCenterRoutes = Router();

const createCostCenterController = new CreateCostCenterController();
const listCostCenterController = new ListCostCenterController();

costCenterRoutes.post("/", createCostCenterController.handle);
costCenterRoutes.get("/", listCostCenterController.handle);

export { costCenterRoutes };
