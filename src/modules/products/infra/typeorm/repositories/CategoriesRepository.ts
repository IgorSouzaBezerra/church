import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "../../../dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "../../../repositories/ICategoriesRepository";
import { Category } from "../entities/Category";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  public constructor() {
    this.repository = getRepository(Category);
  }

  public async create({
    name,
    description,
  }: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category);

    return category;
  }

  public async update(category: Category): Promise<Category> {
    const updatedCategory = await this.repository.save(category);
    return updatedCategory;
  }

  public async findById(id: string): Promise<Category> {
    const category = await this.repository.findOne({ id });

    return category;
  }

  public async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }

  public async findAll(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
}

export { CategoriesRepository };
