import { inject, injectable } from "tsyringe";

import { Product } from "../../infra/typeorm/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ListProductsService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute(): Promise<Product[]> {
    const products = this.productsRepository.findAll();
    return products;
  }
}

export { ListProductsService };
