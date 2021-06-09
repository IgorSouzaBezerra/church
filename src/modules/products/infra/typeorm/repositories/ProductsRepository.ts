import { getRepository, Repository } from "typeorm";

import { ICreateProductDTO } from "../../../dtos/ICreateProductDTO";
import { IProductsRepository } from "../../../repositories/IProductsRepository";
import { Product } from "../entities/Product";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  public async create({
    name,
    category_id,
    amount,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      name,
      category_id,
      amount,
    });

    await this.repository.save(product);

    return product;
  }

  public async findAll(): Promise<Product[]> {
    const products = await this.repository.find();
    return products;
  }
}

export { ProductsRepository };
