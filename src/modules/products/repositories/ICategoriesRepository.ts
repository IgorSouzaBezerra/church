import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
  create(data: ICreateCategoryDTO): Promise<Category>;
  update(category: Category): Promise<Category>;
  findById(id: string): Promise<Category>;
  findByName(name: string): Promise<Category | undefined>;
  findAll(): Promise<Category[]>;
}

export { ICategoriesRepository };
