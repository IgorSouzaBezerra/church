import { container } from "tsyringe";

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
