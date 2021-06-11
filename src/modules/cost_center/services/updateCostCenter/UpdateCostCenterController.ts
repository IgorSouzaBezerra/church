import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCostCenterService } from "./UpdateCostCenterService";

class UpdateCostCenterController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id, number, description, responsible } = request.body;

    const updateCostCenterService = container.resolve(UpdateCostCenterService);

    const updatedCostCenter = await updateCostCenterService.execute({
      id,
      number,
      description,
      responsible,
    });

    return response.json(updatedCostCenter);
  }
}

export { UpdateCostCenterController };
