import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  private categories: Category[] = [];

  public async create({
    name,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);

    return category;
  }

  public async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }

  public async findAll(): Promise<Category[]> {
    return this.categories;
  }
}

export { CategoriesRepositoryInMemory };
