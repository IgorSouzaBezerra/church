import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IUpdateProductDTO } from "../../dtos/IUpdateProductDTO";
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

  public async update({
    id,
    name,
    category_id,
    amount,
    active,
  }: IUpdateProductDTO): Promise<Product> {
    const product = await this.findById(id);

    product.name = name;
    product.category_id = category_id;
    product.amount = amount;
    product.active = active;

    return product;
  }

  public async findAll(): Promise<Product[]> {
    return this.products;
  }

  public async findByName(name: string): Promise<Product> {
    const product = this.products.find((p) => p.name === name);
    return product;
  }

  public async findById(id: string): Promise<Product> {
    const product = this.products.find((p) => p.id === id);
    return product;
  }
}

export { ProductsRepositoryInMemory };
