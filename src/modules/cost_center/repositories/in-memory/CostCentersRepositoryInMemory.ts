import { ICreateCostCenterDTO } from "../../dtos/ICreateCostCenterDTO";
import { CostCenter } from "../../infra/typeorm/entities/CostCenter";
import { ICostCentersRepository } from "../ICostCentersRepository";

class CostCentersRepositoryInMemory implements ICostCentersRepository {
  private costCenter: CostCenter[] = [];

  public async create({
    number,
    description,
    responsible,
  }: ICreateCostCenterDTO): Promise<CostCenter> {
    const costCenter = new CostCenter();

    Object.assign(costCenter, {
      number,
      description,
      responsible,
    });

    this.costCenter.push(costCenter);

    return costCenter;
  }
  public async findByNumber(number: number): Promise<CostCenter> {
    const costCenter = await this.costCenter.find((f) => f.number === number);

    return costCenter;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async findAll(page: number): Promise<CostCenter[]> {
    const costCenters = this.costCenter;
    return costCenters;
  }
}

export { CostCentersRepositoryInMemory };
