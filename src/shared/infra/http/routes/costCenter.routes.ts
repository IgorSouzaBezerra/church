import { Router } from "express";

import { CreateCostCenterController } from "../../../../modules/cost_center/services/createCostCenter/CreateCostCenterController";
import { ListCostCenterController } from "../../../../modules/cost_center/services/listCostCenter/ListCostCenterController";
import { UpdateCostCenterController } from "../../../../modules/cost_center/services/updateCostCenter/UpdateCostCenterController";

const costCenterRoutes = Router();

const createCostCenterController = new CreateCostCenterController();
const listCostCenterController = new ListCostCenterController();
const updateCostCenterController = new UpdateCostCenterController();

costCenterRoutes.post("/", createCostCenterController.handle);
costCenterRoutes.get("/", listCostCenterController.handle);
costCenterRoutes.put("/", updateCostCenterController.handle);

export { costCenterRoutes };
