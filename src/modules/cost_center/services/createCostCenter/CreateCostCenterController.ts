import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCostCenterService } from "./CreateCostCenterService";

class CreateCostCenterController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { number, responsible, description } = request.body;

    const createCostCenterService = container.resolve(CreateCostCenterService);

    const costCenter = await createCostCenterService.execute({
      number,
      responsible,
      description,
    });

    return response.status(201).json(costCenter);
  }
}

export { CreateCostCenterController };
