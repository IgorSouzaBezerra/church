import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateCategoryDTO } from "../../dtos/IUpdateCategoryDTO";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class EditCategoryService {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}
  public async execute({
    id,
    name,
    description,
  }: IUpdateCategoryDTO): Promise<Category> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError("Category isn't already exists");
    }

    category.name = name;
    category.description = description;

    const categoryUpdate = await this.categoriesRepository.update(category);

    return categoryUpdate;
  }
}

export { EditCategoryService };
