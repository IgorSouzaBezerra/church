import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/products/repositories/ICategoriesRepository";
import { CategoriesRepositoryInMemory } from "../../modules/products/repositories/in-memory/CategoriesRepositoryInMemory";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepositoryInMemory
);
