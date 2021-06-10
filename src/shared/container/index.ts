import { container } from "tsyringe";

import { CostCentersRepository } from "../../modules/cost_center/infra/typeorm/repositories/CostCentersRepository";
import { ICostCentersRepository } from "../../modules/cost_center/repositories/ICostCentersRepository";
import { CategoriesRepository } from "../../modules/products/infra/typeorm/repositories/CategoriesRepository";
import { ProductsRepository } from "../../modules/products/infra/typeorm/repositories/ProductsRepository";
import { ICategoriesRepository } from "../../modules/products/repositories/ICategoriesRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<ICostCentersRepository>(
  "CostCentersRepository",
  CostCentersRepository
);
