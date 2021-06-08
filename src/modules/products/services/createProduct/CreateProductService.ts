import { inject, injectable } from "tsyringe";

import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Product } from "../../infra/typeorm/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class CreateProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute({
    name,
    category_id,
    amount,
  }: ICreateProductDTO): Promise<Product> {
    const product = await this.productsRepository.create({
      name,
      category_id,
      amount,
    });

    return product;
  }
}

export { CreateProductService };
