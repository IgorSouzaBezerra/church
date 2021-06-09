import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Product } from "../../infra/typeorm/entities/Product";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class CreateProductService {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  public async execute({
    name,
    category_id,
    amount,
  }: ICreateProductDTO): Promise<Product> {
    const categorieExists = await this.categoriesRepository.findById(
      category_id
    );

    if (!categorieExists) {
      throw new AppError("Category does not exist!");
    }

    const productExists = await this.productsRepository.findByName(name);

    if (productExists) {
      throw new AppError("Product already Exists!");
    }

    const product = await this.productsRepository.create({
      name,
      category_id,
      amount,
    });

    return product;
  }
}

export { CreateProductService };
