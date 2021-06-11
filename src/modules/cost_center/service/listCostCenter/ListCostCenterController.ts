import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCostCenterService } from "./ListCostCenterService";

class ListCostCenterController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { page } = request.query;

    const listCostCenterService = container.resolve(ListCostCenterService);

    const costCenters = await listCostCenterService.execute(Number(page));

    return response.json(costCenters);
  }
}
export { ListCostCenterController };
