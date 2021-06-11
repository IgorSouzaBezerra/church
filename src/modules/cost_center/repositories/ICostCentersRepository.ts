import { ICreateCostCenterDTO } from "../dtos/ICreateCostCenterDTO";
import { CostCenter } from "../infra/typeorm/entities/CostCenter";

interface ICostCentersRepository {
  create(data: ICreateCostCenterDTO): Promise<CostCenter>;
  findByNumber(number: number): Promise<CostCenter>;
  findAll(page: number): Promise<CostCenter[]>;
}

export { ICostCentersRepository };
