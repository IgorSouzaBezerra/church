import { getRepository, Repository } from "typeorm";

import { ICreateCostCenterDTO } from "../../../dtos/ICreateCostCenterDTO";
import { IUpdateCostCenterDTO } from "../../../dtos/IUpdateCostCenterDTO";
import { ICostCentersRepository } from "../../../repositories/ICostCentersRepository";
import { CostCenter } from "../entities/CostCenter";

class CostCentersRepository implements ICostCentersRepository {
  private limitPage = 5;
  private repoitory: Repository<CostCenter>;

  constructor() {
    this.repoitory = getRepository(CostCenter);
  }

  public async create({
    number,
    description,
    responsible,
  }: ICreateCostCenterDTO): Promise<CostCenter> {
    const costCenter = this.repoitory.create({
      number,
      description,
      responsible,
    });

    await this.repoitory.save(costCenter);

    return costCenter;
  }

  public async update({
    id,
    number,
    description,
    responsible,
  }: IUpdateCostCenterDTO): Promise<CostCenter> {
    const updatedCostCenter = await this.repoitory.save({
      id,
      number,
      description,
      responsible,
    });

    return updatedCostCenter;
  }

  public async findByNumber(number: number): Promise<CostCenter> {
    const costCenter = await this.repoitory.findOne({ number });
    return costCenter;
  }
  public async findById(id: string): Promise<CostCenter> {
    const costCenter = await this.repoitory.findOne({ id });
    return costCenter;
  }

  public async findAll(page: number): Promise<CostCenter[]> {
    const costCenters = await this.repoitory.find({
      skip: page * this.limitPage,
      take: this.limitPage,
    });

    return costCenters;
  }
}

export { CostCentersRepository };
