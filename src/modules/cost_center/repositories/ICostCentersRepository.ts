import { ICreateCostCenterDTO } from "../dtos/ICreateCostCenterDTO";
import { IUpdateCostCenterDTO } from "../dtos/IUpdateCostCenterDTO";
import { CostCenter } from "../infra/typeorm/entities/CostCenter";

interface ICostCentersRepository {
  create(data: ICreateCostCenterDTO): Promise<CostCenter>;
  findByNumber(number: number): Promise<CostCenter>;
  findAll(page: number): Promise<CostCenter[]>;
  findById(id: string): Promise<CostCenter>;
  update(data: IUpdateCostCenterDTO): Promise<CostCenter>;
}

export { ICostCentersRepository };
