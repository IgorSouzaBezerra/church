import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "../dtos/IUpdateProductDTO";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  update(data: IUpdateProductDTO): Promise<Product>;
  findAll(): Promise<Product[]>;
  findByName(name: string): Promise<Product>;
  findById(id: string): Promise<Product>;
  findByIds(ids: string[]): Promise<Product[]>;
}

export { IProductsRepository };
