import { container } from "tsyringe";

import "../../modules/users/providers/HashProvider";

import { CostCentersRepository } from "../../modules/cost_center/infra/typeorm/repositories/CostCentersRepository";
import { ICostCentersRepository } from "../../modules/cost_center/repositories/ICostCentersRepository";
import { OrdersRepository } from "../../modules/orders/infra/typeorm/repositories/OrdersRepository";
import { IOrdersRepository } from "../../modules/orders/repositories/IOrdersRepository";
import { CategoriesRepository } from "../../modules/products/infra/typeorm/repositories/CategoriesRepository";
import { ProductsRepository } from "../../modules/products/infra/typeorm/repositories/ProductsRepository";
import { ICategoriesRepository } from "../../modules/products/repositories/ICategoriesRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";
import { UsersRepository } from "../../modules/users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

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

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IOrdersRepository>(
  "OrdersRepository",
  OrdersRepository
);
