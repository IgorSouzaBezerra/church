import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateCostCenterDTO } from "../../dtos/IUpdateCostCenterDTO";
import { CostCenter } from "../../infra/typeorm/entities/CostCenter";
import { ICostCentersRepository } from "../../repositories/ICostCentersRepository";

@injectable()
class UpdateCostCenterService {
  constructor(
    @inject("CostCentersRepository")
    private costCentersRepository: ICostCentersRepository
  ) {}

  public async execute({
    id,
    number,
    description,
    responsible,
  }: IUpdateCostCenterDTO): Promise<CostCenter> {
    const costCenterExists = await this.costCentersRepository.findById(id);

    if (!costCenterExists) {
      throw new AppError("Cost Center does not exists!");
    }

    const updatedCostCenter = await this.costCentersRepository.update({
      id,
      number,
      description,
      responsible,
    });

    return updatedCostCenter;
  }
}

export { UpdateCostCenterService };
