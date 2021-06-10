import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO";
import { Product } from "../../infra/typeorm/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class UpdateProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  public async execute({
    id,
    name,
    amount,
    category_id,
    active,
  }: IUpdateProductDTO): Promise<Product> {
    const productExists = await this.productsRepository.findById(id);

    if (!productExists) {
      throw new AppError("Product does not exists!");
    }

    const productWithTheSameName = await this.productsRepository.findByName(
      name
    );

    if (productWithTheSameName && productWithTheSameName.id !== id) {
      throw new AppError("Product Already exists!");
    }

    const updatedProduct = await this.productsRepository.update({
      id,
      name,
      amount,
      category_id,
      active,
    });

    return updatedProduct;
  }
}

export { UpdateProductService };
