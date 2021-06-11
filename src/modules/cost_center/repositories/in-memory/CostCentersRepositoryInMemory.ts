import { ICreateCostCenterDTO } from "../../dtos/ICreateCostCenterDTO";
import { IUpdateCostCenterDTO } from "../../dtos/IUpdateCostCenterDTO";
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

  public async update({
    id,
    number,
    description,
    responsible,
  }: IUpdateCostCenterDTO): Promise<CostCenter> {
    const costCenter = this.costCenter.find((c) => c.id === id);

    costCenter.number = number;
    costCenter.description = description;
    costCenter.responsible = responsible;

    return costCenter;
  }

  public async findByNumber(number: number): Promise<CostCenter> {
    const costCenter = await this.costCenter.find((f) => f.number === number);

    return costCenter;
  }

  public async findById(id: string): Promise<CostCenter> {
    const costcenter = this.costCenter.find((c) => c.id === id);
    return costcenter;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async findAll(page: number): Promise<CostCenter[]> {
    const costCenters = this.costCenter;
    return costCenters;
  }
}

export { CostCentersRepositoryInMemory };
