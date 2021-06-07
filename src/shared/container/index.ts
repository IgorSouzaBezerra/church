import { container } from "tsyringe";

import { CategoriesRepository } from "../../modules/products/infra/typeorm/repositories/CategoriesRepository";
import { ICategoriesRepository } from "../../modules/products/repositories/ICategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
