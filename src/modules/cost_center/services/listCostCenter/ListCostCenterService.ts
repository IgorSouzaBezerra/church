import { inject, injectable } from "tsyringe";

import { CostCenter } from "../../infra/typeorm/entities/CostCenter";
import { ICostCentersRepository } from "../../repositories/ICostCentersRepository";

@injectable()
class ListCostCenterService {
  constructor(
    @inject("CostCentersRepository")
    private costCenterRepository: ICostCentersRepository
  ) {}

  public async execute(page: number): Promise<CostCenter[]> {
    const costCenters = await this.costCenterRepository.findAll(page);
    return costCenters;
  }
}

export { ListCostCenterService };
