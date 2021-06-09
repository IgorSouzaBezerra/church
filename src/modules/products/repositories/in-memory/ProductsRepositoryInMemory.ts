import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Product } from "../../infra/typeorm/entities/Product";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
  private products: Product[] = [];

  public async create({
    name,
    category_id,
    amount,
  }: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, {
      name,
      category_id,
      amount,
    });

    this.products.push(product);

    return product;
  }

  public async findAll(): Promise<Product[]> {
    return this.products;
  }

  public async findByName(name: string): Promise<Product> {
    const product = this.products.find((p) => p.name === name);
    return product;
  }
}

export { ProductsRepositoryInMemory };
