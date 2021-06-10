import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateCostCenterDTO } from "../../dtos/ICreateCostCenterDTO";
import { CostCenter } from "../../infra/typeorm/entities/CostCenter";
import { ICostCentersRepository } from "../../repositories/ICostCentersRepository";

@injectable()
class CreateCostCenterService {
  constructor(
    @inject("CostCentersRepository")
    private costCentersRepository: ICostCentersRepository
  ) {}

  public async execute({
    number,
    responsible,
    description,
  }: ICreateCostCenterDTO): Promise<CostCenter> {
    const costCenterExists = await this.costCentersRepository.findByNumber(
      number
    );

    if (costCenterExists) {
      throw new AppError("Cost center already exists!");
    }

    const costCenter = await this.costCentersRepository.create({
      number,
      responsible,
      description,
    });

    return costCenter;
  }
}

export { CreateCostCenterService };
